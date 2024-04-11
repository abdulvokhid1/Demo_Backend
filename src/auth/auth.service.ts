import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto, AuthRegisterDto } from './dto';
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
  async register(authDTO: AuthRegisterDto) {
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
      const user = await this.prismaService.user.create({
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
          centerId: Number(authDTO.centerId) | 1,
          levelId: Number(authDTO.levelId) | 1,
          zonecode: authDTO.zonecode || '',
          mobilephone_number: authDTO.mobilephone_number || '',
          phone_number: authDTO.phone_number || '',
          recomid: Number(authDTO.recomid) || 1,
          // sponid: authDTO.sponid || '',
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
        console.log(error);
        throw new ForbiddenException('Error in credentials');
      }
    }
  }
  async login(authDTO: AuthDto) {
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
