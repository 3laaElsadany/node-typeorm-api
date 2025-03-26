import { Router } from 'express';
import { Client } from '../entity/Client';

const fetchClientRouter = Router();

fetchClientRouter.get('/', async (req, res, next) => {
  const client = await Client.find({
    select: {
      first_name: true,
      last_name: true,
      balance: true,
      transactions: {
        amount: true,
        type: true
      }
    },
    relations: ["transactions"]
  });

  res.json({
    data: client
  });

});

export default fetchClientRouter;