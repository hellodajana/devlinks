import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import http from "http"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser"
import compression from "compression"
import cors from "cors"
import mongoose from 'mongoose';
import router from './router';

const app = express();
const port = 3000;

app.use(cors({
  credentials: true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const MONGO_URL = process.env.MONGO_URL;

console.log('MongoDB URL:', process.env.MONGO_URL);


mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error))

app.use('/', router());