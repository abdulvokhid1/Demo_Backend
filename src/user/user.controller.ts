import { Controller, Post, Get, UseGuards, Body } from '@nestjs/common';
// import { QueryParameters } from '@mirrom/nestjs-prisma-pagination';

import { MyJwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { User } from '@prisma/client';
import { UserService } from './user.service';
import { ParameterDto } from './dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(MyJwtGuard)
  @Post('list')
  async list(@Body() parameters: ParameterDto) {
    // console.log(request.user);
    const users = await this.userService.list(parameters);
    return users;
  }

  // @UseGuards(AuthGuard('jwt'))
  @UseGuards(MyJwtGuard)
  @Get('me')
  me(@GetUser() user: User) {
    // console.log(request.user);
    return this.userService.me(user.id);
  }
}
