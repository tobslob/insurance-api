import { RequestHandler } from 'express';
import { ZodSchema } from 'zod';
import { PolicySchema, PolicyUpdateSchema } from './policy.schema';

function validate<T>(schema: ZodSchema<T>): RequestHandler {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      res.status(400).json({ message: 'Invalid policy payload' });
      return;
    }
    req.body = result.data as T;
    next();
  };
}

export const validatePolicy = validate(PolicySchema);
export const validatePolicyUpdate = validate(PolicyUpdateSchema);
