import { env } from './dist/lib';

process.stdout.write(`\n`);
process.stdout.write(`\x1b[35m`);
process.stdout.write(`Example:`);
process.stdout.write(`\x1b[0m\n`);
process.stdout.write(`{ "APP_NAME": "${env('APP_NAME')}" }`);
process.stdout.write(`\n\n`);
