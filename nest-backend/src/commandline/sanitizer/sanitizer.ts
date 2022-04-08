import { Injectable } from '@nestjs/common';

@Injectable()
export class Sanitizer {
    // TODO: Reimplement this
    public sanitizeInput(...args: string[]): string[] {
        if (process.platform === 'win32') {
            return args.map(i =>
                i.split('').map(this.sanitizeWindowsInput).join('')
            );
        } else {
            return args.map(v => v);
        }
    }

    private sanitizeWindowsInput = (i: string): string =>
        (['&', '\\', '<', '>', '^', '|', '"'].includes(i) ? '^' : '') +
        this.sanitizePercent(i);

    private sanitizePercent = (i: string): string => (i === '%' ? '%%' : i);
}
