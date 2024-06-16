import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { CROSS_ORIGIN, MAX_REQUEST_SIZE } from './config/express.config.js';
import uploadConfig from './middlewares/multer.middleware.js';
import routes from './routes/router.js';
import { ROUTE_PREFIX } from './constants/routes.constant.js';
import { errorHandler } from './middlewares/errorHandler.js';

const myExpressApp = express();

myExpressApp.use(cors({
  origin: CROSS_ORIGIN,
  credentials: true,
}));

myExpressApp.use(express.json({
  limit: MAX_REQUEST_SIZE,
}));

myExpressApp.use(express.urlencoded({
  extended: true,
  limit: MAX_REQUEST_SIZE,
}));

myExpressApp.use(express.static('public'));
myExpressApp.use(cookieParser());
myExpressApp.use(uploadConfig.any());
myExpressApp.use(ROUTE_PREFIX, routes);
myExpressApp.use(errorHandler);


export { myExpressApp };
