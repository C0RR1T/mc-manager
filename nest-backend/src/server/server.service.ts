import { Injectable } from '@nestjs/common';
import { CommandlineService } from '../commandline/commandline.service';

@Injectable()
export class ServerService {
    constructor(private commandline: CommandlineService) {
        this.commandline = commandline;
    }
}
