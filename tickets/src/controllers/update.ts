import express, { Request, Response } from "express"
import Ticket from "../models/Ticket"
import { sendFailureResponse, sendSuccessResponse } from "../utils/appResponse"

const updateTicket = async (req: Request, res: Response) => {
  const ticket = await Ticket.findById(req.params.id)

  if (!ticket) {
    sendFailureResponse(res, 404, "ticket not found")
  }

  if (ticket.userId !== req.currentUser!.id) {
    sendFailureResponse(res, 403, "Forbidden")
  }
  ticket.set({
    title: req.body.title,
    price: req.body.price
  })
  await ticket.save()
  sendSuccessResponse(res, 200, ticket)
}

export default updateTicket