import dotenv from 'dotenv'
dotenv.config()


import express from 'express';
import ConnectDB from './config/db.config.js';
import UserRouter from './routes/user.routes.js'
import cors from 'cors';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
ConnectDB()

app.use('/users', UserRouter)

export default app;