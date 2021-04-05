import express from 'express';
import { connectToDataBase } from './db';
import Cashier, { Sex } from './models/cashier';
import Supermarket from './models/supermarket';
import Schedule, { Days, Shift } from './models/schedule';
import { apiRouterV1 } from './router';

export const app = express();

app.use(express.json());

app.use('/api/v1', apiRouterV1);

async function connectAndSynchronize() {
  await connectToDataBase();

  await Supermarket.sync({ force: true });
  await Cashier.sync({ force: true });
  await Schedule.sync({ force: true });

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
            shift: Shift.night,
          },
          {
            cashbox_number: 1,
            day: Days.friday,
            shift: Shift.day,
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
            shift: Shift.night,
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
            shift: Shift.day,
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
            shift: Shift.night,
          },
          {
            cashbox_number: 1,
            day: Days.friday,
            shift: Shift.day,
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
            shift: Shift.night,
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
            shift: Shift.day,
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
