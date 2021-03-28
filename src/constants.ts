import dotenv from 'dotenv';

dotenv.config();

export interface ProcessEnv {
  [key: string]: string | undefined
}

declare let process: {
  env: {
    DATABASE_URL: string,
  }
};

export const connectionString = process.env.DATABASE_URL;
