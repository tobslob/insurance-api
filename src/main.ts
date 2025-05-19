import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiKeyMiddleware } from './common/middleware/apiKey.middleware'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/policies', new ApiKeyMiddleware().use);
  await app.listen(3000);
}
bootstrap();
