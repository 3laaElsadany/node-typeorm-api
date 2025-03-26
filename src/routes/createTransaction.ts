import { Router } from 'express';
import { Client } from '../entity/Client';
import { Transaction, TransactionType } from '../entity/Transaction';

const transactionRouter = Router();

transactionRouter.post('/:clientId', async (req, res, next) => {
  const { clientId } = req.params;

  const client = await Client.findOneBy({ id: parseInt(clientId) });
  if (!client) {
    res.status(404).json({
      message: "Client not found"
    })
    return;
  }


  const { type, amount } = req.body;
  const transaction = Transaction.create({
    amount,
    type,
    client
  });

  await transaction.save();

  if (type === TransactionType.DESPOSIT) {
    client.balance = parseFloat(client.balance.toString()) + amount;
  } else if (type === TransactionType.WITHDRAW) {
    client.balance = parseFloat(client.balance.toString()) - amount;
  }

  await client.save();

  res.json({
    message: "Transaction added"
  })
});

export default transactionRouter;