import { Router } from 'express';
import { Banker } from '../entity/Banker';

const bankerRouter = Router();

bankerRouter.post('/', async (req, res, next) => {
  const {
    first_name,
    last_name,
    email,
    employee_number,
    card_number
  } = req.body;

  const banker = Banker.create({
    first_name,
    last_name,
    email,
    employee_number,
    card_number
  });

  await banker.save();

  res.json({
    data: banker
  });
});

export default bankerRouter;