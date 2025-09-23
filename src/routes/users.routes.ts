import { NextFunction, Request, Response, Router } from 'express';
import UserService from '../services/User.service';
import { context, trace } from "@opentelemetry/api";

import logger from '../logger';
import tracer from '../tracer';
function User() {
  const router = Router();
  const userService = new UserService();


  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const response = await userService.readusers();
      // return res.success('Fetched all users', response);
      throw new Error('Not implemented');// Example to test error handler
    } catch (error) {
      next(error);
    }
  });

  //for error message
  router.get('/errors', async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const response = await userService.readusers();
      // logger.info('Fetched all users successfully');
      return res.error('Error fetching all users', {});
      // throw new Error('Not implemented');// Example to test error handler
    } catch (error) {
      next(error);
    }
  });
  //for success message
  router.get('/success', async (req: Request, res: Response, next: NextFunction) => {
    try {
      // const response = await userService.readusers();
      logger.info('Fetched all users successfully');
      return res.success('Fetched all users', {});
      // throw new Error('Not implemented');// Example to test error handler
    } catch (error) {
      next(error);
    }
  });
  //for error thrown by the user
  router.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    tracer.withSpanContext("UserRoute.getUsers", req, async () => {
      try {
        const response = await userService.readUsers();
        // logger.info('Fetched all users successfully');
        const span = trace.getSpan(context.active());
        // console.log({ current_span_from_api: span });
        throw new Error('Testing with the trace ID');// Example to test error handler
        // return res.success('Fetched all users', {});
      } catch (error) {
        next(error);
      }
    });
  });
  //for custom error message 
  router.get('/error', async (req: Request, res: Response, next: NextFunction) => {
    tracer.withSpanContext("UserRoute.getUsers", req, async () => {
      try {
        const response = await userService.readUsers();
        // logger.info('Fetched all users successfully');
        const span = trace.getSpan(context.active());
        // console.log({ current_span_from_api: span });
        // throw new Error('Testing with the trace ID');// Example to test error handler
        return res.error('This is a custom error message', {}, 'CUSTOM_ERROR_CODE');
        // return res.success('Fetched all users', {});
      } catch (error) {
        next(error);
      }
    });
  });


  return router;
}

export default User;
