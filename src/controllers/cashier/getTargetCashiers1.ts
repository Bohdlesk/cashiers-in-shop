import { Request, Response } from 'express';
import { Op } from 'sequelize';
import Cashier from '../../models/cashier';
import Supermarket from '../../models/supermarket';
import { db } from '../../db';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const bySQL = await db.query(`
        SELECT cashiers.id, first_name, work_experience, previous_job, city
        FROM cashiers
                 INNER JOIN supermarkets 
                     ON supermarket_id = supermarkets.id 
        WHERE (
                      city = 'Львів'
                      AND
                      work_experience > 5
                      AND
                      (previous_job = 'Сільпо'
                      OR
                      previous_job = 'Арсен')
                  )
    `);
    // С INNER JOIN в Sequelize подружиться выйшло пока что не очень, по крайней мере
    // мне не очень навится результат, по этому сделал 2 варианта. Результат так то правильный,
    // но форма мне не нравится
    const bySequelize = await Supermarket.findAll({
      where: {
        city: 'Львів',
      },
      attributes: [],
      include: [
        {
          model: Cashier,
          required: true,
          where: {
            work_experience: { [Op.gt]: 5 },
            previous_job: {
              [Op.like]: { [Op.any]: ['Сільпо', 'Арсен'] },
            },
          },
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
