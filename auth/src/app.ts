import express from "express";
import "express-async-errors";
import routes from "./routes";
import cookieSession from "cookie-session";
import { sendFailureResponse } from "./utils/appResponse";

const app = express();
app.set('trust proxy', true)
app.use(express.json());
app.use(cookieSession({
    signed: false,
    secure: true,

}));
app.use(routes());

app.all("*", (req, res) => {
  sendFailureResponse(res, 404, "Route not found")
});

export default app