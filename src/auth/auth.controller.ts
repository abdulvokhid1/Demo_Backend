import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, AuthRegisterDto } from './dto';

@Controller('auth')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class AuthController {
  constructor(private authService: AuthService) {
    // authService.doSomething();
  }
  //some requests from client
  @Post('register') // register a new user
  async register(@Body() authDto: AuthRegisterDto) {
    // console.log(`email = ${authDto.email}, password = ${authDto.password}`);
    console.log(authDto);
    return await this.authService.register(authDto);
  }

  @Post('login') // login
  login(@Body() authDto: AuthDto) {
    return this.authService.login(authDto);
  }
}
