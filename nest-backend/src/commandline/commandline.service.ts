import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import ServerType from '../lib/ServerType';
import { Sanitizer } from './sanitizer/sanitizer';

type StartDockerArgs = {
    name: string;
    maxRAM: number;
    dir: string;
    port: number;
    type: ServerType;
};

@Injectable()
export class CommandlineService {
    public constructor(private sanitizer: Sanitizer) {}

    public async runDockerCommand(
        command: string,
        ...args: string[]
    ): Promise<string> {
        return await this.runCommand(`docker ${command} ${args.join(' ')}`);
    }

    // TODO: Sanitize Input
    public async startDockerContainer({
        name,
        maxRAM,
        dir,
        port,
        type,
    }: StartDockerArgs): Promise<string> {
        return await this.runDockerCommand('start');
    }

    private async runCommand(command: string): Promise<string> {
        return new Promise(() =>
            exec(command, (error, stdout) => {
                if (error) {
                    return Promise.reject(error);
                } else {
                    return Promise.resolve(stdout);
                }
            })
        );
    }
}
