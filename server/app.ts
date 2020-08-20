// Express App Setup
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import redis from "redis";
import SearchRouter from "./routes/search";

const app = express();

// handle cors
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes for search
app.use("/", SearchRouter);

app.listen(5000, () => {
  console.log("Listening");
});

export const redisClient = redis.createClient({
  port: 6379,
  retry_strategy: () => 1000,
});
