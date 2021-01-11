import express, { Request, Response } from "express"
import Ticket from "../models/Ticket"
import { sendFailureResponse, sendSuccessResponse } from "../utils/appResponse"

const showTicket = async (req: Request, res: Response) => {
  const ticket = await Ticket.findById(req.params.id)
  if (!ticket) {
    sendFailureResponse(res, 404, "ticket does not exist")
  }
  sendSuccessResponse(res, 200, ticket)
}

export default showTicket