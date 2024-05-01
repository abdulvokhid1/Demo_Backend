import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto, AuthRegisterDto, AuthUserDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
@Injectable({})
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  async register_by_admin(authDTO: AuthRegisterDto) {
    // generate password to hashedPassword
    const existedUser = await this.prismaService.user.findFirst({
      where: { email: authDTO.email },
    });
    if (existedUser) {
      throw new ForbiddenException('User already exists');
    }

    const hashedPassword = await argon.hash(authDTO.password);
    // insert data to database
    try {
      const newUser = await this.prismaService.user.create({
        data: {
          email: authDTO.email,
          hashedPassword: hashedPassword,
          name: authDTO.name,
          role: 'user',
          address: authDTO.address || '',
          address1: authDTO.address1 || '',
          addressdoro: authDTO.addressdoro || '',
          zip1: authDTO.zip1 || '',
          zip2: authDTO.zip2 || '',
          centerId: authDTO.centerId ? Number(authDTO.centerId) : 1,
          levelId: authDTO.levelId ? Number(authDTO.levelId) : 1,
          zonecode: authDTO.zonecode || '',
          mobilephone_number: authDTO.mobilephone_number || '',
          phone_number: authDTO.phone_number || '',
          recomid: authDTO.recomid ? Number(authDTO.recomid) : 1,
          // sponid: authDTO.sponid || '',
        },
      });

      const inserted_id = newUser.id;
      const memberId = 'a' + inserted_id.toString().padStart(6, '0');
      const user = await this.prismaService.user.update({
        where: {
          id: inserted_id,
        },
        data: {
          member_id: memberId,
        },
        select: {
          id: true,
          member_id: true,
          email: true,
          name: true,
          mobilephone_number: true,
          phone_number: true,
          sponid: true,
          recom: {
            select: { id: true, name: true },
          },
          Level: {
            select: { id: true, title: true },
          },
          center: {
            select: {
              id: true,
              name: true,
              description: true,
              createdAt: true,
              updatedAt: true,
            },
          },
        },
      });
      const recomUser = await this.prismaService.user.findUnique({
        where: {
          id: authDTO.recomid ? Number(authDTO.recomid) : 1,
        },
      });
      if (recomUser.sub1) {
        await this.prismaService.user.update({
          where: {
            id: recomUser.id,
          },
          data: {
            sub1: inserted_id,
          },
        });
      } else {
        if (recomUser.sub2) {
          await this.prismaService.user.update({
            where: {
              id: recomUser.id,
            },
            data: {
              sub2: inserted_id,
            },
          });
        }
      }
      return {
        // access_token: this.signJwtToken(user.id, user.email),
        profile: {
          ...user,
        },
      };
    } catch (error) {
      if (error.code == 'P2002') {
        console.log(error);
        throw new ForbiddenException('Error in credentials');
      }
    }
  }

  async register_user_page(authDTO: AuthRegisterDto) {
    // generate password to hashedPassword
    const existedUser = await this.prismaService.user.findFirst({
      where: { email: authDTO.email },
    });
    if (existedUser) {
      throw new ForbiddenException('User already exists');
    }

    const hashedPassword = await argon.hash(authDTO.password);
    // insert data to database
    try {
      const newUser = await this.prismaService.user.create({
        data: {
          email: authDTO.email,
          hashedPassword: hashedPassword,
          name: authDTO.name,
          role: 'user',
          address: authDTO.address || '',
          address1: authDTO.address1 || '',
          addressdoro: authDTO.addressdoro || '',
          // zip1: authDTO.zip1 || '',
          // zip2: authDTO.zip2 || '',
          centerId: authDTO.centerId ? Number(authDTO.centerId) : 1,
          levelId: authDTO.levelId ? Number(authDTO.levelId) : 1,
          zonecode: authDTO.zonecode || '',
          mobilephone_number: authDTO.mobilephone_number || '',
          phone_number: authDTO.phone_number || '',
          recomid: authDTO.recomid ? Number(authDTO.recomid) : 1,
          // sponid: authDTO.sponid || '',
        },
      });

      const inserted_id = newUser.id;
      const memberId = 'a' + inserted_id.toString().padStart(6, '0');
      const user = await this.prismaService.user.update({
        where: {
          id: inserted_id,
        },
        data: {
          member_id: memberId,
        },
        select: {
          id: true,
          member_id: true,
          email: true,
          name: true,
          mobilephone_number: true,
          phone_number: true,
          sponid: true,
          recom: {
            select: { id: true, name: true },
          },
          Level: {
            select: { id: true, title: true },
          },
          center: {
            select: {
              id: true,
              name: true,
              description: true,
              createdAt: true,
              updatedAt: true,
            },
          },
        },
      });
      const recomUser = await this.prismaService.user.findUnique({
        where: {
          id: authDTO.recomid ? Number(authDTO.recomid) : 1,
        },
      });
      if (recomUser.sub1) {
        await this.prismaService.user.update({
          where: {
            id: recomUser.id,
          },
          data: {
            sub1: inserted_id,
          },
        });
      } else {
        if (recomUser.sub2) {
          await this.prismaService.user.update({
            where: {
              id: recomUser.id,
            },
            data: {
              sub2: inserted_id,
            },
          });
        }
      }
      return {
        // access_token: this.signJwtToken(user.id, user.email),
        profile: {
          ...user,
        },
      };
    } catch (error) {
      if (error.code == 'P2002') {
        console.log(error);
        throw new ForbiddenException('Error in credentials');
      }
    }
  }
  async login_admin_page(authDTO: AuthDto) {
    // find user with input email
    const user = await this.prismaService.user.findUnique({
      where: {
        email: authDTO.email,
      },
    });
    if (!user) {
      throw new ForbiddenException('User not found');
    }

    const passwordMatched = await argon.verify(
      user.hashedPassword,
      authDTO.password,
    );
    if (!passwordMatched) {
      throw new ForbiddenException('Incorrect password');
    }
    delete user.hashedPassword;
    const accessToken = await this.signJwtToken(user.id, user.email);
    return {
      data: {
        accessToken: accessToken.accessToken,
        user: user,
      },
    };
  }

  async login_user_page(authDTO: AuthUserDto) {
    // find user with input email
    const user = await this.prismaService.user.findUnique({
      where: {
        member_id: authDTO.memberId,
      },
    });
    if (!user) {
      throw new ForbiddenException('User not found');
    }

    const passwordMatched = await argon.verify(
      user.hashedPassword,
      authDTO.password,
    );
    if (!passwordMatched) {
      throw new ForbiddenException('Incorrect password');
    }
    delete user.hashedPassword;
    const accessToken = await this.signJwtToken(user.id, user.email);
    return {
      data: {
        accessToken: accessToken.accessToken,
        user: user,
      },
    };
  }

  async signJwtToken(
    userId: number,
    email: string,
  ): Promise<{ accessToken: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const jwtString = await this.jwtService.signAsync(payload, {
      expiresIn: '180m',
      secret: this.configService.get('JWT_SECRET'),
    });
    return {
      accessToken: jwtString,
    };
  }
}
