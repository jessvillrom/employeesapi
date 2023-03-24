import { Router } from "express";
import { home, ping } from "../controllers/index.controller.js";

const router = Router();

router.get("/", home);

router.get("/ping", ping);

export default router;
