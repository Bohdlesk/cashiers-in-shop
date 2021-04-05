import { Request, Response } from 'express';
import Supermarket from '../../models/supermarket';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const supermarket = await Supermarket.update(
      req.body,
      {
        where: { id },
        returning: true,
      },
    );

    if (!supermarket[0]) {
      res.status(404).json({
        message: `Supermarket #${id} is not found`,
      });
    } else {
      res.status(200).json({
        supermarket: supermarket[1][0],
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
