import express from "express";
import { createUser, getAllUsers, getUserByEmail } from "./user.controller";
const router = express.Router();

router.post("/", createUser)
router.get("/", getAllUsers);
router.get("/:email", getUserByEmail);

export default router;
