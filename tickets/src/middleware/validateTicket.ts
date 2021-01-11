import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const ticketValidationRules = () => {
  return [
    body("title").not().isEmpty().withMessage("Title is required"),
    body("price").isFloat({ gt: 0 }).withMessage("Price must be greater than 0")
  ];
};

export default ticketValidationRules;
