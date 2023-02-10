import { NestFactory } from '@nestjs/core';
import { adminModule } from './admin.module';

async function bootstrap() {
    const app = await NestFactory.create(adminModule);
    await app.listen(3000);
}
bootstrap();
