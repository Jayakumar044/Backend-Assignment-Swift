import { Request, Response } from "express";
import client from "../config/db";
import { loadData } from "../utils/fetchData";
import { User } from "../models/types";

export const loadHandler = async (_: Request, res: Response) => {
  await loadData();
  res.status(200).send();
};

export const deleteAllUsers = async (_: Request, res: Response) => {
  await client.db().collection("users").deleteMany({}); 
};

export const deleteUser = async (req: Request, res: Response) => {
  const result = await client.db().collection("users").deleteOne({ id: +req.params.userId });
  result.deletedCount
    ? res.json({ message: "User deleted" })
    : res.status(404).json({ error: "User not found" });
};

export const getUser = async (req: Request, res: Response) => {
  const user = await client.db().collection<User>("users").findOne({ id: +req.params.userId }); 
  user
    ? res.json(user)
    : res.status(404).json({ error: "User not found" });
};

export const addUser = async (req: Request, res: Response) => {
  const newUser: User = req.body;
  const exists = await client.db().collection("users").findOne({ id: newUser.id });

  if (exists) {
    res.status(400).json({ error: "User already exists." });
  } else {
    await client.db().collection("users").insertOne(newUser);
    res.status(201).json(newUser);
  }
};
