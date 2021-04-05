import { Request, Response } from 'express';
import Cashier from '../../models/cashier';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const cashier = await Cashier.create({
      supermarket_id: Number(req.params.id),
      ...req.body,
    });
    res.status(200).json({
      cashier,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
