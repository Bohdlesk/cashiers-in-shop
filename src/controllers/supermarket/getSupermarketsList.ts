import { Request, Response } from 'express';
import { FindOptions } from 'sequelize';
import Supermarket from '../../models/supermarket';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const findOptions: FindOptions = {
      where: {
        ...req.query,
      },
    };
    const supermarkets = await Supermarket.findAll(findOptions);
    res.status(200).json({
      supermarkets,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
