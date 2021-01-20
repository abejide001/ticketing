import { natsWrapper } from './../nats-wrapper';
import express, { Request, Response } from 'express'
import { TicketCreatedPublisher } from '../events/publishers/ticket-created-publisher'
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
  new TicketCreatedPublisher(natsWrapper.client).publish({
    id: ticket.id,
    title: ticket.title,
    price: ticket.price,
    userId: ticket.userId
  })
  sendSuccessResponse(res, 201, ticket)
}

export default newTicket