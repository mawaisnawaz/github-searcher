// Express App Setup
import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios";
import redis from "redis";

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const redisClient = redis.createClient({
  port: 6379,
  retry_strategy: () => 1000,
});

// Express route handlers

app.get("/", (req: Request, res: Response) => {
  res.send("Hi, Working...!!");
});

const checkCache = (req: Request, res: Response, next: NextFunction) => {
  const { searchText, entityType } = req.body;
  console.log(req.body);

  redisClient.get(`${entityType}:${searchText}`, (err: Error | null, data: any): void => {
    if (err) {
      res.status(500).send(err);
    }
    if (data != null) {
      res.json(JSON.parse(data));
    } else {
      next();
    }
  });
};

app.post("/search", checkCache, async (req: Request, res: Response) => {
  try {
    const { searchText, entityType } = req.body;
    console.log(req.body);
    const response = await axios.get(`https://api.github.com/search/${entityType}?q=${searchText}`);

    //get data from response
    const responseData = response.data;

    //add data to Redis
    redisClient.setex(`${entityType}:${searchText}`, 7200, JSON.stringify(responseData));
    return res.json(responseData);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

app.get("/clear-cache", async (req: Request, res: Response) => {
  try {
    redisClient.flushdb(() => {
      res.status(200).send({ message: "Cache Cleared Successfully" });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

app.listen(5000, () => {
  console.log("Listening");
});
