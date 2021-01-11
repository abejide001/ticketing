import express, { Request, Response } from 'express'
import Ticket from '../models/Ticket'
import { sendSuccessResponse } from '../utils/appResponse'

const newTicket = async (req: Request, res: Response) => {
  const { title, price } = req.body
  const ticket = Ticket.build({
    title,
    price,
    userId: req.currentUser!.id
  })
  await ticket.save()
  sendSuccessResponse(res, 201, ticket)
}

export default newTicket