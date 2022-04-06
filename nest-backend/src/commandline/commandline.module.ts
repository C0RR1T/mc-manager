import { Module } from '@nestjs/common';
import { CommandlineService } from './commandline.service';
import { Sanitizer } from './sanitizer/sanitizer';

@Module({
    providers: [CommandlineService, Sanitizer],
    exports: [CommandlineService],
})
export class CommandlineModule {}
