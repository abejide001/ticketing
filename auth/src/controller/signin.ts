import jwt from 'jsonwebtoken';
import { Password } from "./../utils/password";
import { Request } from "express";
import User from "../models/User";
import { sendFailureResponse, sendSuccessResponse } from "../utils/appResponse";

const signin = async (req: Request, res: any) => {
  const { email, password } = req.body;
  const user = await User.find({ email });
  if (user.length === 0) {
    sendFailureResponse(res, 400, "Incorrect email or password");
    return
  }
  const passwordMatch = await Password.compare(user[0].password, password);
  if (!passwordMatch) {
    sendFailureResponse(res, 400, "Incorrect email or password");
  }
  const userJwt = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_KEY!
  );
  // Store it on session object
  req.session = {
    jwt: userJwt
  };
    sendSuccessResponse(res, 200, user)
};

export default signin;
