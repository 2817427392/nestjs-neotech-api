import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticateUserService } from './services/authenticate-user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(
    private readonly authenticateUserService: AuthenticateUserService,
  ) {
    super({
      usernameField: 'email',
      passwordField: 'password', 
    });
  }

  public async validate(email: string, password: string): Promise<any> {
    const result = await this.authenticateUserService.execute({ email, password });

    if (result == 0) {
      throw new UnauthorizedException('Senha incorreta');
    } else if (result == -1){
      throw new UnauthorizedException('Email não cadastrado');
    }

    return result;
  }
}

