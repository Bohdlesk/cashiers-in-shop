import express from 'express';
import { connectToDataBase } from './db';
import Cashier from './models/cashier';
import Supermarket from './models/supermarket';
import Schedule from './models/schedule';
import { apiRouterV1 } from './router';
import Gender, { Sex } from './models/gender';
import Shift, { Shifts } from './models/shift';
import Day, { Days } from './models/day';

export const app = express();

app.use(express.json());

app.use('/api/v1', apiRouterV1);

async function connectAndSynchronize() {
  await connectToDataBase();

  await Supermarket.sync({ force: true });
  await Gender.sync({ force: true });
  await Cashier.sync({ force: true });
  await Shift.sync({ force: true });
  await Day.sync({ force: true });
  await Schedule.sync({ force: true });

  await Gender.create({ sex: Sex.male });
  await Gender.create({ sex: Sex.female });

  await Shift.create({ shift: Shifts.day });
  await Shift.create({ shift: Shifts.night });

  await Day.create({ day: Days.monday });
  await Day.create({ day: Days.tuesday });
  await Day.create({ day: Days.wednesday });
  await Day.create({ day: Days.thursday });
  await Day.create({ day: Days.friday });
  await Day.create({ day: Days.saturday });
  await Day.create({ day: Days.sunday });

  await Supermarket.create({
    address: 'Шевченка 100',
    city: 'Київ',
    Cashiers: [
      {
        first_name: 'Max',
        last_name: 'Pain',
        sex: Sex.male,
        age: 20,
        work_experience: 8,
        previous_job: 'Сільпо',
      },
      {
        first_name: 'Max',
        last_name: 'Pain',
        sex: Sex.male,
        age: 20,
        work_experience: 1,
        previous_job: 'Сільпо',
      },
      {
        first_name: 'Max',
        last_name: 'Pain',
        sex: Sex.male,
        age: 20,
        work_experience: 8,
        previous_job: 'Арсен',
      }, {
        first_name: 'Max',
        last_name: 'Pain',
        sex: Sex.male,
        age: 20,
        work_experience: 2,
        previous_job: 'Арсен',
      },
      {
        first_name: 'Max',
        last_name: 'Pain',
        sex: Sex.male,
        age: 20,
        work_experience: 1,
        previous_job: 'Сільпо',
      },
      {
        first_name: 'Billi',
        last_name: 'Last',
        sex: Sex.male,
        age: 20,
        work_experience: 6,
        previous_job: 'Сільпо',
        Schedules: [
          {
            cashbox_number: 2,
            day: Days.monday,
            shift: Shifts.night,
          },
          {
            cashbox_number: 1,
            day: Days.friday,
            shift: Shifts.day,
          },
        ],
      },
      {
        first_name: 'Max',
        last_name: 'Pain',
        sex: Sex.male,
        age: 27,
        work_experience: 1,
        previous_job: 'Сільпо',
        Schedules: [
          {
            cashbox_number: 1,
            day: Days.friday,
            shift: Shifts.night,
          },
        ],
      },
      {
        first_name: 'Max',
        last_name: 'Pain',
        sex: Sex.male,
        age: 27,
        work_experience: 1,
        previous_job: 'Сільпо',
        Schedules: [
          {
            cashbox_number: 1,
            day: Days.friday,
            shift: Shifts.day,
          },
        ],
      },
    ],
  }, {
    include: [
      {
        association: Supermarket.Cashier,
        include: [Cashier.Schedule],
      },
    ],
  });

  await Supermarket.create({
    address: 'Шевченка 100',
    city: 'Львів',
    Cashiers: [
      {
        first_name: 'Max',
        last_name: 'Pain',
        sex: Sex.male,
        age: 20,
        work_experience: 8,
        previous_job: 'Сільпо',
      },
      {
        first_name: 'Max',
        last_name: 'Pain',
        sex: Sex.male,
        age: 20,
        work_experience: 1,
        previous_job: 'Сільпо',
      },
      {
        first_name: 'Max',
        last_name: 'Pain',
        sex: Sex.male,
        age: 20,
        work_experience: 8,
        previous_job: 'Арсен',
      }, {
        first_name: 'Max',
        last_name: 'Pain',
        sex: Sex.male,
        age: 20,
        work_experience: 2,
        previous_job: 'Арсен',
      },
      {
        first_name: 'Billi',
        last_name: 'Last',
        sex: Sex.male,
        age: 20,
        work_experience: 6,
        previous_job: 'Сільпо',
        Schedules: [
          {
            cashbox_number: 1,
            day: Days.monday,
            shift: Shifts.night,
          },
          {
            cashbox_number: 1,
            day: Days.friday,
            shift: Shifts.day,
          },
        ],
      },
      {
        first_name: 'Max',
        last_name: 'Pain',
        sex: Sex.male,
        age: 27,
        work_experience: 1,
        previous_job: 'Сільпо',
        Schedules: [
          {
            cashbox_number: 1,
            day: Days.monday,
            shift: Shifts.night,
          },
        ],
      },
      {
        first_name: 'Max',
        last_name: 'Pain',
        sex: Sex.male,
        age: 27,
        work_experience: 1,
        previous_job: 'Сільпо',
        Schedules: [
          {
            cashbox_number: 1,
            day: Days.friday,
            shift: Shifts.day,
          },
        ],
      },
    ],
  }, {
    include: [
      {
        association: Supermarket.Cashier,
        include: [Cashier.Schedule],
      },
    ],
  });
}

connectAndSynchronize();
