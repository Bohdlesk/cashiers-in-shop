import { Request, Response } from 'express';
import Schedule from '../../models/schedule';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const isDeleted = await Schedule.destroy({ where: { id: req.params.id } });
    if (isDeleted) {
      res.status(200).json({
        info: `Schedule #${req.params.id} has been deleted`,
      });
    } else {
      res.status(404).json({
        message: `Schedule #${req.params.id} does not exist`,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
