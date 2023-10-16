import { config as dotenvConfig } from 'dotenv';
import { existsSync } from 'fs';

export type ConfigOptions = {
  verbose?: boolean;
};

export function config({ verbose }: ConfigOptions = {}) {
  const originalEnv = `.env`;

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
    if (verbose) {
      process.stdout.write(`\x1b[35m`);
      process.stdout.write(`Loaded env files:`);
      process.stdout.write(`\x1b[34m`);
    }

    envSet.forEach((path) => {
      if (path !== originalEnv) {
        dotenvConfig({ override: true, path });
      }

      if (verbose) {
        process.stdout.write(` ${path}`);
      }
    });

    if (verbose) {
      process.stdout.write(`\x1b[0m\n`);
    }
  }
}

export function env(key: string) {
  config({ verbose: false });
  return process?.env?.[key] ?? '';
}
