import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, AuthRegisterDto, AuthUserDto } from './dto';

@Controller('auth')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class AuthController {
  constructor(private authService: AuthService) {
    // authService.doSomething();
  }
  //some requests from client
  @Post('register_by_admin') // register a new user
  async register_by_admin(@Body() authDto: AuthRegisterDto) {
    // console.log(`email = ${authDto.email}, password = ${authDto.password}`);
    console.log(authDto);
    return await this.authService.register_by_admin(authDto);
  }

  @Post('login_admin_page') // login
  login_admin_page(@Body() authDto: AuthDto) {
    return this.authService.login_admin_page(authDto);
  }

  @Post('register') // register a new user
  async register_user_page(@Body() authDto: AuthRegisterDto) {
    // console.log(`email = ${authDto.email}, password = ${authDto.password}`);
    console.log(authDto);
    return await this.authService.register_user_page(authDto);
  }

  @Post('login') // login
  login_user_page(@Body() authDto: AuthUserDto) {
    return this.authService.login_user_page(authDto);
  }
}
