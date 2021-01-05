import express from "express";
import signup from "../controller/signup";
import {validateBody, userValidationRules } from "../middlewares/validateSignup";

const router = express.Router();
router.post("/api/users/signup", userValidationRules(), validateBody, signup);

export { router as signupRouter };
