import { Injectable } from '@nestjs/common';

@Injectable()
export class Sanitizer {
    // TODO: Reimplement this
    sanitizeInput(...args: string[]): string {
        const ret = [];

        function repeat(s: string, n: number) {
            let result = '';
            while (n) {
                if (n % 2 === 1) {
                    result += s;
                }
                if (n > 1) {
                    s += s;
                }
                n >>= 1;
            }
            return result;
        }

        if (process.platform === 'win32') {
            args.forEach(function (s) {
                if (/[\s\\"]/.test(s)) {
                    let backslashes = 0;
                    let c;
                    let rep = '"';
                    const flushBackslashes = (n: number) => {
                        rep = rep + repeat('\\', n * backslashes);
                        backslashes = 0;
                    };
                    for (let i = 0, slen = s.length; i < slen; i++) {
                        c = s.charAt(i);
                        if (c === '\\') {
                            backslashes++;
                        } else if (c === '"') {
                            flushBackslashes(2);
                            rep = rep + '\\"';
                        } else {
                            flushBackslashes(1);
                            rep = rep + c;
                        }
                    }
                    flushBackslashes(2);
                    rep = rep + '"';
                    s = rep;
                }
                ret.push(s);
            });
        } else {
            args.forEach(function (s) {
                if (/[^A-Za-z0-9_/:=-]/.test(s)) {
                    s = "'" + s.replace(/'/g, "'\\''") + "'";
                    s = s
                        .replace(/^(?:'')+/g, '') // unduplicate single-quote at the beginning
                        .replace(/\\'''/g, "\\'"); // remove non-escaped single-quote if there are enclosed between 2 escaped
                }
                ret.push(s);
            });
        }

        return ret.join(' ');
    }
}
