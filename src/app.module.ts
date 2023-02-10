
import { Module } from '@nestjs/common';
import { adminModule } from './Admin/admin.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
    imports: [adminModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }

