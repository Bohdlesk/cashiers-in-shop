import { Router } from 'express';
import * as controller from '../controllers/cashier';

export const cashiersRouter = Router({ mergeParams: true });

cashiersRouter.post('/', controller.createCashier);
cashiersRouter.delete('/:id', controller.deleteCashier);
cashiersRouter.put('/:id', controller.editCashierInfo);
cashiersRouter.get('/:id', controller.getCashierById);
cashiersRouter.get('/', controller.getCashiersList);
