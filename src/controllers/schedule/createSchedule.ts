import { Request, Response } from 'express';
import Schedule from '../../models/schedule';
import Cashier from '../../models/cashier';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const oldSchedule = await Cashier.findAll({
      where: {
        supermarket_id: req.params.supermarket_id,
      },
      include: [
        {
          model: Schedule,
          where: {
            day: req.body.day,
            shift: req.body.shift,
            cashbox_number: req.body.cashbox_number,
          },
        },
      ],
    });
    // Проверки на касир - супермаркет нету, не знаю нужна ли она тут...

    if (oldSchedule.length !== 0) {
      res.status(404).json({
        massage: 'Данная смена на данной кассе уже занята',
      });
    } else {
      const cashier = await Schedule.create({
        cashier_id: Number(req.params.cashier_id),
        ...req.body,
      });
      res.status(200).json({
        cashier,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
