import { Publisher, Subjects, TicketCreatedEvent } from "@ticketdev/common";


export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated
}