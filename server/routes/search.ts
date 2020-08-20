import express, { Request, Response, NextFunction } from "express";
import axios from "axios";
import { body, validationResult } from "express-validator";
const searchRouter = express.Router();
import { redisClient } from "../app";

const InputValidation = [body("searchText").isLength({ min: 3 }), body("entityType").isIn(["users", "repositories"])];

searchRouter.get("/", (req: Request, res: Response) => {
  res.send("Hi, Working...!!");
});

const checkCache = (req: Request, res: Response, next: NextFunction) => {
  const { searchText, entityType } = req.body;

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

searchRouter.post("/search", InputValidation, checkCache, async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { searchText, entityType } = req.body;

    const response = await axios.get(`https://api.github.com/search/${entityType}?q=${searchText}`);

    //get data from response
    const responseData = response.data;

    //add data to Redis
    redisClient.setex(`${entityType}:${searchText}`, 7200, JSON.stringify(responseData));
    return res.status(200).json(responseData);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

searchRouter.get("/clear-cache", async (req: Request, res: Response) => {
  try {
    redisClient.flushdb(() => {
      res.status(200).send({ message: "Cache Cleared Successfully" });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

export default searchRouter;
