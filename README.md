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

Sometimes it is necessary to manually reload, so you can use:

```javascript
import { config } from 'dotenv-auto/lib';

config();
```

To retrieve a single key value, just use `env`:

```javascript
import { env } from 'dotenv-auto/lib';

const appEnv = env('NODE_ENV');
```
