import { Controller, Request, Post, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginUserService } from '../services/login-user.service';

@Controller()
export class LoginController {
  constructor(
    private readonly loginUserService: LoginUserService,
  ){}
  
  @UseGuards(AuthGuard('local'))
  @Post('login')
  @HttpCode(HttpStatus.OK)
  public async login(@Request() req) {
    return await this.loginUserService.execute(req.user);
  }
}
