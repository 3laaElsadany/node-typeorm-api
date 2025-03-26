import { Router } from 'express';
import { Client } from '../entity/Client';
// import { Transaction } from '../entity/Transaction';

const deleteClientRouter = Router();

deleteClientRouter.delete('/:clientId', async (req, res, next) => {

  const id = parseInt(req.params.clientId);

  const client = await Client.findOne({
    where: {
      id
    }
  })

  if (!client) {
    res.status(404).json({
      message: "Client not found"
    });
    return;
  }

  // await Transaction.delete({ client: { id } });
  await Client.delete(id);

  res.json({ message: "Client deleted successfully" });
});

export default deleteClientRouter;