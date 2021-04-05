import { Request, Response } from 'express';
import Supermarket from '../../models/supermarket';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const existMarket = await Supermarket.findOne({
      where: {
        city: req.body.city,
        address: req.body.address,
      },
    });
    if (existMarket) {
      res.status(404).json({
        error: 'Supermarket already exist',
      });
    } else {
      const supermarket = await Supermarket.create(req.body);
      res.status(200).json({
        supermarket,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
