import { NestFactory } from '@nestjs/core';
import { NeoTechApiModule } from './neotech-api.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(NeoTechApiModule);
  app.setGlobalPrefix('api/neotech');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    })
  )
  await app.listen(3004);
  console.log('NeoTech API rodando em http://localhost:3004');
}
bootstrap();
