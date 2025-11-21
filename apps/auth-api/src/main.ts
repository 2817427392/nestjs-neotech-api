import { NestFactory } from '@nestjs/core';
import { AuthApiModule } from './auth-api.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthApiModule);
  app.setGlobalPrefix('api/auth');
  await app.listen(3003);
  console.log('Auth API rodando em http://localhost:3003');
}
bootstrap();
