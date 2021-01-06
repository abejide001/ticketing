import jwt from "jsonwebtoken";
import User from "../models/User";
import { sendFailureResponse } from "../utils/appResponse";

const signup = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      sendFailureResponse(res, 400, "Email already exist");
    }
  } catch (err) {
    console.log(err.message);
  }
  const user = User.build({
    email,
    password,
  });
  await user.save();
  const userJwt = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_KEY!
  );
  req.session.jwt = userJwt;
  res.status(201).send(user);
};

export default signup;
