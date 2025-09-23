import dotenv from 'dotenv';
import express from 'express';
import App from './app';
import { envConfiguration } from './configs/env.config';
import './configs/global.config';
import logger from './logger';
import tracer from './tracer';


dotenv.config();
async function bootstrap() {


  let app = express();

  app.use(tracer.metricsMiddleware());
  app.use(tracer.tracerMiddleware());
  tracer.initialize();

  // app.use(tracer.middleware());
  const port = envConfiguration.PORT || 3500;

  app = App({ app });

  const server = app.listen(port, () => {
    logger.info(`[server]: Server is running at http://localhost:${port}`);
  });

} bootstrap();