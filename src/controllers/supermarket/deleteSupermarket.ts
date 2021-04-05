import { Request, Response } from 'express';
import Supermarket from '../../models/supermarket';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const isDeleted = await Supermarket.destroy({ where: { id } });
    if (isDeleted) {
      res.status(200).json({
        info: `Supermarket #${id} has been deleted`,
      });
    } else {
      res.status(404).json({
        message: `Supermarket #${id} does not exist`,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
