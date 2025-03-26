import express from "express";
import { AppDataSource } from "./data-source";
import clientRouter from "./routes/createClient";
import bankerRouter from "./routes/createBanker";
import transactionRouter from "./routes/createTransaction";
import connectBabkerToClientRouter from "./routes/connectBankerToClient";
import deleteClientRouter from "./routes/deleteClient";
import fetchClientRouter from "./routes/fetchClient";
require('dotenv').config();

const app = express();

(async () => {
    try {
        await AppDataSource.initialize();
        console.log("Connected to postgres");

        app.use(express.json());

        app.use('/api/client', clientRouter);
        app.use('/api/clients', fetchClientRouter);
        app.use('/api/banker', bankerRouter);
        app.use('/api/transaction', transactionRouter);
        app.use('/api/connectBankerToClient', connectBabkerToClientRouter);
        app.use('/api/deleteClient', deleteClientRouter);

        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);
    }
})();
