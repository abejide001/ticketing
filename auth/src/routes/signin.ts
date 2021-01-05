import express from "express";
import signin from "../controller/signin";

const app = express();
const router = express.Router()
router.post("/api/users/signin", signin)

export { router as signinRouter }