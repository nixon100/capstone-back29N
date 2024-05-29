import express from "express";
import { getProject} from "../controllers/task.js";

const router = express.Router();

// router.post("/register", register)
// router.post("/login", login)
router.get("/",getProject )


export default router