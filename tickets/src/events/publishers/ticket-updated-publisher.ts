import { Publisher, Subjects, TicketUpdatedEvent } from "@ticketdev/common";


export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated
}