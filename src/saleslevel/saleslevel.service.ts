import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Saleslevel } from '@prisma/client';
import { saleslevelDto } from './dto/saleslevel.dto';

@Injectable()
export class SaleslevelService {
  constructor(private prismaService: PrismaService) {}

  async list() {
    const saleslevel = await this.prismaService.saleslevel.findMany();
    return saleslevel;
  }

  async update(authDTO: Saleslevel) {
    // generate password to hashedPassword
    const existedUser = await this.prismaService.user.findFirst({
      where: { email: authDTO.email },
    });
    if (existedUser) {
      throw new ForbiddenException('User already exists');
    }

        // insert data to database
    try {
      const saleslevel = await this.prismaService.saleslevel.create({
        data: {
          level: saleslevel.level,
          position_name : position_name ,
          
        },
        select: {
          // only return id, email, createdAt
          id: true,
          email: true,
          name: true,
          mobilephone_number: true,
          createdAt: true,
        },
      });
      return {
        // access_token: this.signJwtToken(user.id, user.email),
        profile: {
          name: user.name,
          email: user.email,
          mobilephone_number: user.mobilephone_number,
        },
      };
    } catch (error) {
      if (error.code == 'P2002') {
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
}
