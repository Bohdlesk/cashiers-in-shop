import { Router } from 'express';
import { supermarketsRouter } from './supermarket';
import { cashiersRouter } from './cashier';
import { scheduleRouter } from './schedule';

export const apiRouterV1 = Router();

apiRouterV1.use('/supermarkets/:supermarket_id/cashiers', cashiersRouter);
apiRouterV1.use('/supermarkets', supermarketsRouter);

apiRouterV1.use('/supermarkets/:supermarket_id/cashiers/:cashier_id/schedule', scheduleRouter);
// apiRouterV1.use('/cashiers/:cashier_id/schedule', scheduleRouter);

apiRouterV1.use('/cashiers', cashiersRouter);
