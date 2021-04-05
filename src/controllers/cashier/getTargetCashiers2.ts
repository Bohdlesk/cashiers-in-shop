import { Request, Response } from 'express';
import Sequelize, { Op } from 'sequelize';
import Cashier from '../../models/cashier';
import Supermarket from '../../models/supermarket';
import { db } from '../../db';
import Schedule, { Days, Shift } from '../../models/schedule';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const bySQL = await db.query(`
        SELECT cashiers.id, first_name, address, day, shift, cashbox_number
        FROM cashiers
                 INNER JOIN supermarkets
                            ON supermarket_id = supermarkets.id
                 INNER JOIN schedules
                            ON cashier_id = cashiers.id
        WHERE (
                      address = 'Шевченка 100'
                      AND
                      day = 'MONDAY'
                      AND
                      shift = 'NIGHT'
                      AND
                      cashbox_number % 2 != 0
                  )
    `);
    // С INNER JOIN в Sequelize подружиться выйшло пока что не очень, по крайней мере
    // мне не очень навится результат, по этому сделал 2 варианта. Результат так то правильный,
    // но форма мне не нравится
    const bySequelize = await Supermarket.findAll({
      where: {
        address: 'Шевченка 100',
      },
      attributes: [],
      include: [
        {
          model: Cashier,
          required: true,
          include: [
            {
              model: Schedule,
              required: true,
              where: {
                [Op.and]: [
                  Sequelize.literal('cashbox_number % 2 != 0'),
                  {
                    day: Days.monday,
                    shift: Shift.night,
                  },
                ],
              },
            },
          ],
        },
      ],
    });
    res.status(200).json({
      bySQL: bySQL[0],
      bySequelize,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
