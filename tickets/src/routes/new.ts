import express from "express";
import newTicket from "../controllers/new";
import { requireAuth, validateBody } from "@ticketdev/common"
import ticketValidationRules from "../middleware/validateTicket";


const router = express.Router()
router.post("/api/tickets", requireAuth, ticketValidationRules(), validateBody, newTicket)

export { router as newTicketRouter }