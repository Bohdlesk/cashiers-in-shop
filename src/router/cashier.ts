import { Router } from 'express';
import * as controller from '../controllers/cashier';

export const cashiersRouter = Router({ mergeParams: true });

cashiersRouter.post('/', controller.createCashier);
cashiersRouter.delete('/:id', controller.createCashier);
