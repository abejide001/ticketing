import express from "express";
import { requireAuth } from "@ticketdev/common"
import showTicket from "../controllers/show";


const router = express.Router()
router.get("/api/tickets/:id", requireAuth, showTicket)

export { router as showTicketRouter }