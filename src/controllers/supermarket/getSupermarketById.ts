import { Request, Response } from 'express';
import Supermarket from '../../models/supermarket';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const supermarket = await Supermarket.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (supermarket) {
      res.status(200).json({
        supermarket,
      });
    } else {
      res.status(404).json({
        error: `Supermarket #${req.params.id} don't exist`,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
