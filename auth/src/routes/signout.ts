import express from "express";
import signout from "../controller/signout";

const router = express.Router();

router.get("/api/users/signout", signout);

export { router as signoutRouter };
