import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';

import ErrorResponseHandler from './handlers/ErrorResponse';
import logger from './logger';
import customResponseMiddleware from './middleware/customResponse.middleware';
import userRoute from './routes/users.routes';
import dbConnection from './database/index.database';
dotenv.config();

interface IApp {
  app: Express;
}

function App(params: IApp): Express {
  const { app } = params;
  dbConnection();
  app.use(express.json());
  app.use(
    cors({
      origin: 'http://localhost:3000', // replace with your frontend origin
      methods: ['GET', 'POST', 'PUT', 'PATCH'],
      credentials: true,
    }),
  );
  app.use(customResponseMiddleware);
  app.use(`/user`, userRoute());

  // app.get('/', (req: Request, res: Response) => {
  //     res.success('Hello', { foo: 'bar' });
  //     return res;
  // });

  app.use(ErrorResponseHandler);

  // logger.info('info');
  // logger.verbose('verbose');
  // logger.debug('debug');
  // logger.silly('silly');
  return app;
}
export default App;
