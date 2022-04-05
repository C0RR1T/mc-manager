import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import ServerType from '../lib/ServerType';

type StartDockerArgs = {
    name: string;
    maxRAM: number;
    dir: string;
    port: number;
    type: ServerType;
};

@Injectable()
export class CommandlineService {
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
        name = name.replace("'", "\\'");
        dir = name.replace("'", "\\'");
        return await this.runDockerCommand('start');
    }
}
