import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServerModule } from './server/server.module';
import { CommandlineService } from './commandline/commandline.service';

@Module({
    imports: [ServerModule],
    controllers: [AppController],
    providers: [AppService, CommandlineService],
})
export class AppModule {}
