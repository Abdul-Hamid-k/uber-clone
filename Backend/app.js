import dotenv from 'dotenv'
dotenv.config()


import express from 'express';
import ConnectDB from './config/db.config.js';
import UserRouter from './routes/user.routes.js'
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser())
ConnectDB()

app.use('/users', UserRouter)

export default app;