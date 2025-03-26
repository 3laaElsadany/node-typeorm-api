import { Router } from 'express';
import { Client } from '../entity/Client';

const clientRouter = Router();

clientRouter.post('/', async (req, res, next) => {
  const {
    first_name,
    last_name,
    email,
    balance,
    card_number
  } = req.body;

  const client = Client.create({
    first_name,
    last_name,
    email,
    balance,
    card_number
  });

  await client.save();

  res.send(client);
});

export default clientRouter;