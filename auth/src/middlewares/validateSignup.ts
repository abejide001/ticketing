import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const userValidationRules = () => {
  return [
    body("email").isEmail().withMessage("email must be valid"),

    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ];
};
const validateBody = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const extractedErrors: any = [];
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
      errors: extractedErrors,
    });
  }
  return next();
};

export { validateBody, userValidationRules };
