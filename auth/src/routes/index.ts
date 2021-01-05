import express from "express";
import { currentUserRouter } from "./current-user";
import { signinRouter } from "./signin";
import { signoutRouter } from "./signout";
import { signupRouter } from "./signup";

const routes = () => {
  const router = express.Router();
  router.use(currentUserRouter);
  router.use(signinRouter);
  router.use(signoutRouter);
  router.use(signupRouter);
  return router;
};
export default routes;
