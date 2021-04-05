import { Request, Response } from 'express';
import { UpdateOptions } from 'sequelize';
import Cashier from '../../models/cashier';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const updateOptions: UpdateOptions = {
      where: {
        ...req.params,
      },
      returning: true,
    };
    const cashier = await Cashier.update(
      req.body,
      updateOptions,
    );

    if (!cashier[0]) {
      res.status(404).json({
        message: `Cashier #${req.params.id} is not found`,
      });
    } else {
      res.status(200).json({
        cashier: cashier[1][0],
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
