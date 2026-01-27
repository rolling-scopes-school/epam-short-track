import { Router } from "express";
import {
  getUser,
  loginUser,
  registerUser,
} from "../controllers/me.controller.js";

const router = Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/user", getUser);

export const meRouter = router;
