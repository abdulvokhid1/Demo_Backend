import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ParameterDto, SponsorListDto, SponsorResponseType } from './dto';
import noop from 'noop-ts';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async list(parameters: ParameterDto) {
    let query = {};
    parameters.id ? (query = { ...query, id: parameters.id }) : noop;
    parameters.memberId
      ? (query = { ...query, member_id: { contains: parameters.memberId } })
      : noop;
    parameters.name
      ? (query = { ...query, name: { contains: parameters.name } })
      : noop;
    parameters.level ? (query = { ...query, level: parameters.level }) : noop;

    if (parameters.limit) {
      const [total, users] = await this.prismaService.$transaction([
        this.prismaService.user.count({
          where: query,
        }),
        this.prismaService.user.findMany({
          where: query,
          include: {
            center: true,
            Level: true,
            recom: true,
            subs: true,
          },
          take: Number(parameters.limit),
          skip: Number(parameters.limit) * (Number(parameters.page) - 1),
        }),
      ]);
      users.map((item) => {
        delete item['hashedPassword'];
      });
      return {
        total: total,
        users: users,
      };
    }
    const total = await this.prismaService.user.count({
      where: query,
    });
    const users = await this.prismaService.user.findMany({
      where: query,
      include: {
        center: true,
        Level: true,
        subs: true,
        recom: true,
      },
    });
    users.map((item) => {
      delete item['hashedPassword'];
    });
    return {
      total: total,
      users: users,
    };
  }

  async list_without_access(parameters: ParameterDto) {
    let query = {};
    parameters.memberId
      ? (query = { ...query, member_id: { contains: parameters.memberId } })
      : noop;

    if (parameters.limit) {
      const [total, users] = await this.prismaService.$transaction([
        this.prismaService.user.count({
          where: query,
        }),
        this.prismaService.user.findMany({
          where: query,
          include: {
            center: true,
            Level: true,
            recom: true,
            subs: true,
          },
          take: Number(parameters.limit),
          skip: Number(parameters.limit) * (Number(parameters.page) - 1),
        }),
      ]);
      users.map((item) => {
        delete item['hashedPassword'];
      });
      return {
        total: total,
        users: users,
      };
    }
    const total = await this.prismaService.user.count({
      where: query,
    });
    const users = await this.prismaService.user.findMany({
      where: query,
      include: {
        center: true,
        Level: true,
        subs: true,
        recom: true,
      },
    });
    users.map((item) => {
      delete item['hashedPassword'];
    });
    return {
      total: total,
      users: users,
    };
  }

  async me(userId: number) {
    const note = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    });
    return note;
  }

  async getSponsors(params: SponsorListDto) {
    let list = null;
    const memberId = params.memberId || '';
    if (memberId && memberId != '') {
      list = await this.prismaService.$queryRaw`
          WITH RECURSIVE user_hierarchy AS (
              SELECT    u.id,
                        name,
                        member_id,
                        recomid,
                        u.createdAt,
                        company_levels.title level
              FROM users u, company_levels
              WHERE u.member_id = ${memberId} and u.levelId =  company_levels.id

              UNION ALL

              SELECT
                  u.id,
                  u.name,
                  u.member_id,
                  u.recomid,
                  u.createdAt,
                  c.title as level
              FROM users u, user_hierarchy, company_levels c
              WHERE u.recomid = user_hierarchy.id and u.levelId = c.id
          )
          SELECT *
          FROM user_hierarchy
          ORDER BY user_hierarchy.createdAt;
      `;
    } else {
      // Get from root
      list = await this.prismaService.$queryRaw`
          WITH RECURSIVE user_hierarchy AS (
              SELECT    u.id,
                        name,
                        member_id,
                        recomid,
                        u.createdAt,
                        company_levels.title level
              FROM users u, company_levels
              WHERE u.member_id = 'a0000001' and u.levelId =  company_levels.id

              UNION ALL

              SELECT
                  u.id,
                  u.name,
                  u.member_id,
                  u.recomid,
                  u.createdAt,
                  c.title as level
              FROM users u, user_hierarchy, company_levels c
              WHERE u.recomid = user_hierarchy.id and u.levelId = c.id
          )
          SELECT *
          FROM user_hierarchy
          ORDER BY user_hierarchy.createdAt;
      `;
    }
    const [head, ...rest] = list;

    const result: SponsorResponseType = {
      id: head.id,
      name: head.name,
      member_id: head.member_id,
      recomid: head.recomid,
      level: head.level,
      createdAt: head.createdAt,
      children: [],
    };
    this.hierarchy(result, rest);

    return result;
  }

  hierarchy(head: SponsorResponseType, subs: any[]) {
    if (subs.length <= 0) return;

    for (let i = 0; i < subs.length; i++) {
      const sub = subs[i];
      const node: SponsorResponseType = {
        id: sub.id,
        member_id: sub.member_id,
        name: sub.name,
        recomid: sub.recomid,
        level: sub.level,
        createdAt: sub.createdAt,
        children: [],
      };
      if (head.id == node.recomid) {
        // recurse with subs rest
        head.children.push(node);
        this.hierarchy(node, subs.slice(i + 1, subs.length));
      }
    }
  }
}
