import express from "express";
import currentUser from "../controller/currentUser";
import currentUserMiddleware from "../middlewares/currentUser";


const app = express();
const router = express.Router()

router.get("/api/users/currentUser", currentUserMiddleware, currentUser)

export { router as currentUserRouter }