import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import logger from './logger.middleware';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(logger);
    await app.listen(8080);
}

bootstrap();
