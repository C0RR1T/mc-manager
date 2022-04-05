import { Injectable } from '@nestjs/common';

@Injectable()
export class Sanitizer {
    // TODO: Reimplement this
    sanitizeInput(...args: string[]): string[] {
        if (process.platform === 'win32') {
            return args.map(v => v);
        } else {
            return args.map(v => v);
        }
    }
}
