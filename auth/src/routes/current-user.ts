import express from "express";
import currentUser from "../controller/currentUser";

const app = express();
const router = express.Router()

router.get("/api/users/currentUser", currentUser)

export { router as currentUserRouter }