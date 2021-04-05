import { Request, Response } from 'express';
import Schedule from '../../models/schedule';
import Cashier from '../../models/cashier';

export default async (req: Request, res: Response): Promise<void> => {
  // Возвращает список смены ТОЛЬКО ПО ДАННОМУ супермаркету, не вижу смысла
  // возвращать весь список пока что
  try {
    const query = await Cashier.findOne({
      where: {
        id: req.params.cashier_id,
      },
      attributes: [],
      include: [
        {
          model: Schedule,
          required: true,
          where: { ...req.query },
        },
      ],
    });
    res.json({
      query: query?.get('Schedules'),
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
