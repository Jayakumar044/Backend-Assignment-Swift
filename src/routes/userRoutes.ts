import express from "express";
import {
  loadHandler,
  getUser,
  addUser,
  deleteUser,
  deleteAllUsers,
} from "../controllers/userController";

const router = express.Router();

router.get("/load", loadHandler);
router.get("/users/:userId", getUser);
router.post("/users", addUser);              
router.delete("/users", deleteAllUsers);
router.delete("/users/:userId", deleteUser);

export default router;
