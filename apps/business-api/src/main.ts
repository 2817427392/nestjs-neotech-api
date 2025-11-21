import { NestFactory } from '@nestjs/core';
import { BusinessApiModule } from './business-api.module';

async function bootstrap() {
  const app = await NestFactory.create(BusinessApiModule);
  app.setGlobalPrefix('api/business');
  await app.listen(3002);
  console.log('Business API rodando em http://localhost:3002');
}
bootstrap();
