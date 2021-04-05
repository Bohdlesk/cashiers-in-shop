import { Request, Response } from 'express';
import Cashier from '../../models/cashier';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const isDeleted = await Cashier.destroy({ where: { ...req.params } });
    if (isDeleted) {
      res.status(200).json({
        info: `Cashier #${req.params.id} has been deleted`,
      });
    } else {
      res.status(404).json({
        message: `Cashier #${req.params.id} does not exist`,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
