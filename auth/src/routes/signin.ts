import express from "express";
import signin from "../controller/signin";
import { userValidationRules, validateBody } from "../middlewares/validateSignup";

const router = express.Router()
router.post("/api/users/signin",  userValidationRules(), validateBody,  signin)

export { router as signinRouter }