import { Module } from '@nestjs/common';
import { AuthenticateUserService } from './services/authenticate-user.service';
import { AdministratorModule } from 'apps/administrator-api/src/administrator/administrator.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { LoginUserService } from './services/login-user.service';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from './controllers/login.controller';
import { jwtConstants } from './jwtStrategy/constants';
import { JwtStrategy } from './jwtStrategy/jwt.strategy';
import { AdminGuard } from './guards/admin.guard';

@Module({
  imports: [
    AdministratorModule,
    PassportModule.register({ 
      defaultStrategy: 'jwt' 
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthenticateUserService,
    LoginUserService,
    JwtStrategy,
    LocalStrategy,
    AdminGuard,
  ],
  controllers: [
    LoginController,
  ],
  exports: [
    AuthenticateUserService,
    PassportModule,
    JwtModule,
    JwtStrategy,
    AdminGuard,
  ]
})
export class AuthModule {}
