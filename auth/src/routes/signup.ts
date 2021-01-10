import express from "express";
import signup from "../controller/signup";
import { userValidationRules, validateBody } from "@ticketdev/common";

const router = express.Router();
router.post("/api/users/signup", userValidationRules(), validateBody, signup);

export { router as signupRouter };
