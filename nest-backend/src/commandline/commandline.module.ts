import { Module } from '@nestjs/common';
import { CommandlineService } from './commandline.service';

@Module({
    providers: [CommandlineService],
    exports: [CommandlineService],
})
export class CommandlineModule {}
