import { Router } from 'express';
import * as controller from '../controllers/supermarket';

export const supermarketsRouter = Router();

supermarketsRouter.post('/', controller.createSupermarket);
supermarketsRouter.get('/:id', controller.getSupermarketById);
supermarketsRouter.get('/', controller.getSupermarketsList);
supermarketsRouter.put('/:id', controller.editSupermarket);
supermarketsRouter.delete('/:id', controller.deleteSupermarket);
