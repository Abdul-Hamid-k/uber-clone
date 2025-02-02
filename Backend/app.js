import dotenv from 'dotenv'
dotenv.config()

import express from 'express';
const app = express();

import ConnectDB from './config/db.config.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import UserRouter from './routes/user.routes.js'
import CaptainRouter from './routes/captain.routes.js'
import MapRouter from './routes/map.routes.js'
import RideRoute from './routes/ride.routes.js'

ConnectDB()

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/user', UserRouter)
app.use('/captain', CaptainRouter)
app.use('/map', MapRouter)
app.use('/ride', RideRoute)

export default app;