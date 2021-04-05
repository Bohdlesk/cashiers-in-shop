import { Request, Response } from 'express';
import { FindOptions } from 'sequelize';
import Cashier from '../../models/cashier';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const findOptions: FindOptions = {
      where: {
        ...req.query,
        ...req.params,
      },
    };

    const cashiers = await Cashier.findAll(findOptions);
    res.status(200).json({
      cashiers,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
