import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  ParameterDto,
  SponsorListDto,
  SponsorResponseType,
  UserInfoDto,
  UserUpdateDto,
} from './dto';
import noop from 'noop-ts';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
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
            spon: true,
            sponsoredSubs: true,
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
        spon: true,
        sponsoredSubs: true,
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
            spon: true,
            sponsoredSubs: true,
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
        spon: true,
        sponsoredSubs: true,
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

  async info(parameters: UserInfoDto) {
    if (!parameters || (!parameters.id && !parameters.memberId)) {
      throw new NotFoundException('Not Parameters Found');
    }
    let query = {};
    parameters.id ? (query = { ...query, id: Number(parameters.id) }) : noop;
    parameters.memberId
      ? (query = { ...query, member_id: parameters.memberId })
      : noop;
    const result = await this.prismaService.user.findFirst({
      where: query,
      include: {
        center: true,
        Level: true,
        recom: true,
        subs: true,
        spon: true,
        sponsoredSubs: true,
      },
    });
    if (result) {
      delete result['hashedPassword'];
    }
    return result;
  }

  async recommendedList(parameters: ParameterDto) {
    let query = {};
    parameters.id ? (query = { ...query, recomid: parameters.id }) : noop;

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
            // spon: true,
            // sponsoredSubs: true,
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
        // spon: true,
        // sponsoredSubs: true,
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
  async sponsoredList(parameters: ParameterDto) {
    let query = {};
    parameters.id ? (query = { ...query, sponid: parameters.id }) : noop;

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
            // recom: true,
            // subs: true,
            spon: true,
            sponsoredSubs: true,
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
        // subs: true,
        // recom: true,
        spon: true,
        sponsoredSubs: true,
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

  async update(userDto: UserUpdateDto) {
    // generate password to hashedPassword
    const existedUser = await this.prismaService.user.findFirst({
      where: { email: userDto.email },
    });
    if (!existedUser) {
      throw new ForbiddenException('User already exists');
    }
    // update data to database
    try {
      const newUser = await this.prismaService.user.update({
        where: { id: userDto.id },
        data: {
          email: userDto.email,
          name: userDto.name,
          member_id: userDto.member_id,
          address: userDto.address || '',
          address1: userDto.address1 || '',
          addressdoro: userDto.addressdoro || '',
          zip1: userDto.zip1 || '',
          zip2: userDto.zip2 || '',
          centerId: userDto.centerId ? Number(userDto.centerId) : 1,
          levelId: userDto.levelId ? Number(userDto.levelId) : 1,
          zonecode: userDto.zonecode || '',
          mobilephone_number: userDto.mobilephone_number || '',
          phone_number: userDto.phone_number || '',
          recomid: userDto.recomid ? Number(userDto.recomid) : undefined,
          sponid: userDto.sponid ? Number(userDto.sponid) : undefined,
          return_bank: userDto.return_bank || '',
          return_name: userDto.return_name || '',
          return_account: userDto.return_account || '',
          // sponid: authDTO.sponid || '',
        },
      });

      const recomUser = await this.prismaService.user.findUnique({
        where: {
          id: userDto.recomid ? Number(userDto.recomid) : 0,
        },
      });
      if (!recomUser) {
        return newUser;
      }

      if (recomUser.sub1) {
        await this.prismaService.user.update({
          where: {
            id: recomUser.id,
          },
          data: {
            sub1: userDto.id,
          },
        });
      } else {
        if (recomUser.sub2) {
          await this.prismaService.user.update({
            where: {
              id: recomUser.id,
            },
            data: {
              sub2: userDto.id,
            },
          });
        }
      }
      // Assign sub-users under sponid, similar to recomid logic
      const sponsorUser = await this.prismaService.user.findUnique({
        where: { id: userDto.sponid ? Number(userDto.sponid) : 0 },
      });

      if (sponsorUser) {
        if (!sponsorUser.sub1) {
          await this.prismaService.user.update({
            where: { id: sponsorUser.id },
            data: { sub1: userDto.id },
          });
        } else if (!sponsorUser.sub2) {
          await this.prismaService.user.update({
            where: { id: sponsorUser.id },
            data: { sub2: userDto.id },
          });
        } else {
          // Optional: Handle the case where both sub1 and sub2 are already populated
          throw new ForbiddenException('User already has two sub-users');
        }
      }
      return newUser;
    } catch (error) {
      if (error.code == 'P2002') {
        console.log(error);
        throw new ForbiddenException('Error in credentials');
      }
    }
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
              WHERE u.member_id = 'master' and u.levelId =  company_levels.id

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

  async getLimitedSponsors(params: SponsorListDto) {
    let list = null;
    const memberId = params.memberId || '';
    if (memberId && memberId !== '') {
      list = await this.prismaService.$queryRaw`
      WITH RECURSIVE user_hierarchy AS (
        SELECT    u.id,
                  name,
                  member_id,
                  sponid,
                  u.createdAt,
                  company_levels.title level
        FROM users u, company_levels
        WHERE u.member_id = ${memberId} and u.levelId =  company_levels.id

        UNION ALL

        SELECT
            u.id,
            u.name,
            u.member_id,
            u.sponid,
            u.createdAt,
            c.title as level
        FROM users u, user_hierarchy, company_levels c
        WHERE u.sponid
         = user_hierarchy.id and u.levelId = c.id
      )
      SELECT *
      FROM user_hierarchy
      ORDER BY user_hierarchy.createdAt;
    `;
    } else {
      list = await this.prismaService.$queryRaw`
      WITH RECURSIVE user_hierarchy AS (
        SELECT    u.id,
                  name,
                  member_id,
                  sponid,
                  u.createdAt,
                  company_levels.title level
        FROM users u, company_levels
        WHERE u.member_id = 'master' and u.levelId =  company_levels.id

        UNION ALL

        SELECT
            u.id,
            u.name,
            u.member_id,
            u.sponid,
            u.createdAt,
            c.title as level
        FROM users u, user_hierarchy, company_levels c
        WHERE u.sponid
         = user_hierarchy.id and u.levelId = c.id
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
      sponid: head.sponid,
      level: head.level,
      createdAt: head.createdAt,
      children: [],
    };

    this.hierarchyWithLimit(result, rest);

    return result;
  }
  hierarchyWithLimit(head: SponsorResponseType, subs: any[]) {
    if (subs.length <= 0) return;

    for (let i = 0; i < subs.length; i++) {
      const sub = subs[i];
      const node: SponsorResponseType = {
        id: sub.id,
        member_id: sub.member_id,
        name: sub.name,
        sponid: sub.sponid,
        level: sub.level,
        createdAt: sub.createdAt,
        children: [],
      };
      if (head.id === node.sponid && head.children.length < 2) {
        // Add node to children only if the current head has less than 2 sub-users
        head.children.push(node);
        this.hierarchyWithLimit(node, subs.slice(i + 1, subs.length));
      }
    }
  }

  public async deleteMember(id: string) {
    // Make sure id is of type string
    const user = await this.prismaService.user.findUnique({
      where: { member_id: id }, // Ensure this matches the ID type
    });

    if (!user) {
      throw new ForbiddenException(`User with ID ${id} not found`);
    }

    return this.prismaService.user.update({
      where: { member_id: id },
      data: { isDeleted: true },
    });
  }
}
