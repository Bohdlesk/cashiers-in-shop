import { Request, Response } from 'express';
import Schedule from '../../models/schedule';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const schedule = await Schedule.update(
      req.body,
      {
        where: {
          id: req.params.id,
        },
        returning: true,
      },
    );

    if (!schedule[0]) {
      res.status(404).json({
        message: `Schedule #${req.params.id} is not found`,
      });
    } else {
      res.status(200).json({
        schedule: schedule[1][0],
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
