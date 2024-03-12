import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class AuthController {
  constructor(private authService: AuthService) {
    // authService.doSomething();
  }
  //some requests from client
  @Post('register') // register a new user
  register(@Body() authDto: AuthDto) {
    // console.log(`email = ${email}, password = ${password}`);
    console.log(authDto);
    return this.authService.register(authDto);
  }

  @Post('login') // login
  login(@Body() authDto: AuthDto) {
    return this.authService.login(authDto);
  }
}
