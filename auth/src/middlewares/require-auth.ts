import { Request, Response, NextFunction } from "express"
import { sendFailureResponse } from "../utils/appResponse"

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.currentUser) {
    sendFailureResponse(res, 401, "Not authorized")
  }
  next()
}