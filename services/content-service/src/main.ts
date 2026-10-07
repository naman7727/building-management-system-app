import { NestFactory } from '@nestjs/core';
import { ContentModule } from './content.module';

async function bootstrap() {
  const app = await NestFactory.create(ContentModule);
  app.enableCors({ origin: process.env.WEB_ORIGIN, credentials: true });
  await app.listen(Number(process.env.CONTENT_SERVICE_PORT ?? 3002));
}
bootstrap();
