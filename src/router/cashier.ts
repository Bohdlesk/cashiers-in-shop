import { Router } from 'express';
import * as controller from '../controllers/cashier';

export const cashiersRouter = Router({ mergeParams: true });

cashiersRouter.post('/', controller.createCashier);
cashiersRouter.delete('/:id', controller.deleteCashier);
cashiersRouter.put('/:id', controller.editCashierInfo);
cashiersRouter.get('/target1', controller.getTargetCashiers1);
cashiersRouter.get('/target2', controller.getTargetCashiers2);
cashiersRouter.get('/:id', controller.getCashierById);
cashiersRouter.get('/', controller.getCashiersList);
