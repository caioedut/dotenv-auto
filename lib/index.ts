import { config as dotenvConfig } from 'dotenv';
import { existsSync } from 'fs';

const originalEnv = `.env`;

// Auto Load
config();

export function config() {
  // Maybe NODE_ENV is on .env (┬┬﹏┬┬)
  dotenvConfig({ override: true, path: originalEnv });

  const NODE_ENV = (process.env.NODE_ENV ?? '').toLowerCase();

  const parsedEnv =
    {
      dev: 'development',
      prod: 'production',
    }[NODE_ENV] ?? NODE_ENV;

  const currentEnv = [originalEnv, parsedEnv].filter(Boolean).join('.');
  const localEnv = [currentEnv, 'local'].filter(Boolean).join('.');

  const envSet = [originalEnv, currentEnv, localEnv].filter(
    (path, index, array) => array.indexOf(path) === index && existsSync(path),
  );

  if (envSet.length) {
    process.stdout.write(`\x1b[35m`);
    process.stdout.write(`Loaded env files:`);
    process.stdout.write(`\x1b[34m`);

    envSet.forEach((path) => {
      if (path !== originalEnv) {
        dotenvConfig({ override: true, path });
      }

      process.stdout.write(` ${path}`);
    });

    process.stdout.write(`\x1b[0m\n`);
  }
}
