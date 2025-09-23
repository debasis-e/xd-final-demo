import dotenv from 'dotenv';
dotenv.config();
export const envConfiguration = {
  PORT: process.env.PORT ?? 5000,
  ENVIRONMENT: process.env.NODE_ENV ?? 'development',
};
