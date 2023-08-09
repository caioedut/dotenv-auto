import { rmSync } from 'fs';
import pmex from 'pmex';

// Remove current build
rmSync('dist', {
  recursive: true,
  force: true,
});

pmex('tsc --build --force');
