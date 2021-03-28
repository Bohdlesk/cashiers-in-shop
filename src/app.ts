import express from 'express';
import { connectToDataBase } from './db';

export const app = express();

app.use(express.json());

// connection to data base
connectToDataBase();
