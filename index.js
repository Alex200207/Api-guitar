import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

import guitarRouter from './routes/guitar/guitarRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};
app.use(cors(corsOptions));

const port = 3000;
app.use('/guitarras',guitarRouter);


app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});