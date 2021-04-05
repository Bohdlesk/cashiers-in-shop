import { Router } from 'express';
import * as controller from '../controllers/schedule';

export const scheduleRouter = Router({ mergeParams: true });

scheduleRouter.post('/', controller.createSchedule);
scheduleRouter.get('/:id', controller.getScheduleById);
scheduleRouter.get('/', controller.getScheduleList);
scheduleRouter.delete('/:id', controller.deleteSchedule);
scheduleRouter.put('/:id', controller.editSchedule);
