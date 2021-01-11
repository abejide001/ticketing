import express, { Request, Response } from "express"
import Ticket from "../models/Ticket"
import { sendSuccessResponse } from "../utils/appResponse"

const getTickets = async (req: Request, res: Response) => {
  const tickets = await Ticket.find()
  sendSuccessResponse(res, 200, tickets)
}

export default getTickets