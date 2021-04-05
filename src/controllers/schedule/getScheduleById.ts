import { Request, Response } from 'express';
import Schedule from '../../models/schedule';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    // Привязка к айди супермаркета и касира в URL тут бессполезна, ни на что не влияет, не знаю
    // правильно ли это, мне лично не очень нарвится, но создавать отдельынй роутер на это
    // дело тоже как то не очень...
    const schedule = await Schedule.findOne({ where: { id: req.params.id } });
    res.json({
      schedule,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
