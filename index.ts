import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import articleController from "./controllers/articleController";
import commentController from "./controllers/commentController";

mongoose.connect("mongodb+srv://rasmo:yiZ6zOZHd6J65GG2@cluster0.p92qo.mongodb.net/test");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Connected to MongoDB');
})

const app: Express = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/', articleController);

app.use('/', commentController);

app.listen(3010,() => {
  console.log(`[server]: Server is running at http://localhost:3010`);
});
