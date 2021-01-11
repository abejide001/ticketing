import express from "express";
import { requireAuth, validateBody } from "@ticketdev/common"
import ticketValidationRules from "../middleware/validateTicket";
import updateTicket from "../controllers/update";


const router = express.Router()
router.put("/api/tickets/:id", requireAuth, ticketValidationRules(), validateBody, updateTicket)

export { router as updateTicketRouter }