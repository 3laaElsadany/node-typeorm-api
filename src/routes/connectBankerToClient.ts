import { Router } from 'express';
import { Client } from '../entity/Client';
import { Banker } from '../entity/Banker';

const connectBabkerToClientRouter = Router();

connectBabkerToClientRouter.put('/banker/:bankerId/client/:clientId', async (req, res, next) => {
  const { bankerId, clientId } = req.params;

  const client = await Client.findOne({ where: { id: parseInt(clientId) } });
  const banker = await Banker.findOne({
    where: { id: parseInt(bankerId) },
    relations: ["clients"]
  })
  if (!client || !banker) {
    res.status(404).json({
      message: "Banker or client not found"
    })
    return;
  }

  banker.clients = [
    ...banker.clients,
    client
  ];

  await banker.save();

  res.json({
    message: "Banker connected to client"
  })
});

export default connectBabkerToClientRouter;