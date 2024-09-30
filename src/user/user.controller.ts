import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { MyJwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { User } from '@prisma/client';
import { UserService } from './user.service';
import { ParameterDto, SponsorListDto, UserInfoDto, UserUpdateDto } from './dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('list_without_access')
  async list_without_access(@Body() parameterDto: ParameterDto) {
    // console.log(request.user);
    const users = await this.userService.list_without_access(parameterDto);
    return users;
  }

  @UseGuards(MyJwtGuard)
  @Post('list')
  async list(@Body() parameterDto: ParameterDto) {
    // console.log(request.user);
    const users = await this.userService.list(parameterDto);
    return users;
  }

  @UseGuards(MyJwtGuard)
  @Post('info')
  async info(@Body() infoDto: UserInfoDto) {
    // console.log(request.user);
    const user = await this.userService.info(infoDto);
    return user;
  }

  @UseGuards(MyJwtGuard)
  @Post('recommended_list')
  async recommended_list(@Body() infoDto: ParameterDto) {
    // console.log(request.user);
    const users = await this.userService.recommendedList(infoDto);
    return users;
  }

  @UseGuards(MyJwtGuard)
  @Post('update')
  async update(@Body() infoDto: UserUpdateDto) {
    // console.log(request.user);
    const user = await this.userService.update(infoDto);
    return user;
  }

  // @UseGuards(AuthGuard('jwt'))
  @UseGuards(MyJwtGuard)
  @Get('me')
  me(@GetUser() user: User) {
    // console.log(request.user);
    return this.userService.me(user.id);
  }

  @UseGuards(MyJwtGuard)
  @Post('sponsors')
  async sponsors(@Body() params: SponsorListDto) {
    // console.log(request.user);
    const sponsors = await this.userService.getSponsors(params);
    return sponsors;
  }
}
