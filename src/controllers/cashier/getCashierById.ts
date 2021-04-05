import { Request, Response } from 'express';
import Cashier from '../../models/cashier';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const cashier = await Cashier.findOne({ where: { id } });
    if (cashier) {
      res.status(200).json({
        cashier,
      });
    } else {
      res.status(404).json({
        error: 'Cashier don\'t exist',
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
