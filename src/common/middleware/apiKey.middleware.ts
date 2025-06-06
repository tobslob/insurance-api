import { RequestHandler } from 'express';

const EXPECTED_KEY = process.env.API_KEY || 'secret-api-key';

export const apiKeyMiddleware: RequestHandler = (req, res, next) => {
  if (req.method === 'GET') return next();

  const apiKey = req.headers['x-api-key'];
  if (apiKey !== EXPECTED_KEY) {
    res.status(401).json({ message: 'Invalid API key' });
    return;
  }
  next();
};
