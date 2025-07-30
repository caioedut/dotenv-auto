# Deprecation
**Warning:** This extension library is **deprecated**. It is now recommended to install `dotenv` and use `import 'dotenv/config'` directly to load environment variables.

# dotenv-auto

This lib automatically loads `.env` files according to to the [standard .env file resolution](https://github.com/bkeepers/dotenv/blob/c6e583a/README.md#what-other-env-files-can-i-use) and then replaces all references in your code to `process.env.[VARNAME]`.

## Install

```shell
npm install dotenv-auto
# OR
yarn add dotenv-auto
# OR
pnpm add dotenv-auto
```

## Usage

Simply import at the top of the file.

```javascript
import 'dotenv-auto';
```

## API


### config()
Sometimes it is necessary to manually reload, so you can use:

```javascript
import { config } from 'dotenv-auto/api';

config();

console.log(process.env.APP_NAME);
```

### env()
To retrieve a single key value, just use `env`:

```javascript
import { env } from 'dotenv-auto/api';

const appName = env('APP_NAME');

console.log(process.env.APP_NAME);
```
