import { NestFactory } from '@nestjs/core';
import { AdministratorApiModule } from './administrator-api.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AdministratorApiModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      }
    })
  )
  app.setGlobalPrefix('api/admin');
  await app.listen(3001);
  console.log('Administrator API rodando em http://localhost:3001');
}
bootstrap();
