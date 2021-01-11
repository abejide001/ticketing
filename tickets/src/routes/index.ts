import express from "express";
import { newTicketRouter } from "./new";
import { showTicketRouter } from "./show";
import { getTicketsRouter } from "./getTickets"
import { updateTicketRouter } from "./update";

const routes = () => {
  const router = express.Router();
  router.use(newTicketRouter);
  router.use(showTicketRouter)
  router.use(getTicketsRouter)
  router.use(updateTicketRouter)
  return router;
};
export default routes;
