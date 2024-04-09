import { Controller, Get, UseGuards } from '@nestjs/common';
import { MyJwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(MyJwtGuard)
  @Get('list')
  async list() {
    // console.log(request.user);
    const users = await this.userService.list();
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
