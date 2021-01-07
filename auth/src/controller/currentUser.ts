import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { sendFailureResponse, sendSuccessResponse } from "../utils/appResponse";

const currentUser = (req: Request, res: Response) => {
  res.send({
    currentUser: req.currentUser,
  });
};

export default currentUser;
