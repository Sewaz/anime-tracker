import dotenv from 'dotenv';
import { fileURLToPath } from 'node:url';

dotenv.config({
  path: fileURLToPath(new URL('../../.env', import.meta.url)),
});

export const env = {
  PORT: Number(process.env.PORT) || 5000,
};