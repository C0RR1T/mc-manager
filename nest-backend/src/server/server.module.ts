import { Module } from '@nestjs/common';
import { ServerController } from './server.controller';
import { ServerService } from './server.service';
import { CommandlineModule } from '../commandline/commandline.module';

@Module({
    controllers: [ServerController],
    providers: [ServerService],
    imports: [CommandlineModule],
})
export class ServerModule {}
