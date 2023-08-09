import { execSync } from 'child_process';

import pmex from 'pmex';

pmex('test');

pmex('build');

pmex('npm version patch');

pmex('npm publish');

execSync('git push', { stdio: 'inherit' });
