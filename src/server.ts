import express from 'express';
import { policiesRouter } from './routes/policies.routes';
import { requestLogger } from './common/middleware/logger.middleware';

const app = express();
app.use(express.json());
app.use(requestLogger);

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.use('/policies', policiesRouter);

// Fallback for unknown routes
app.use((_req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Global error handler

app.use(
  (
    err: any,
    _req: express.Request,
    res: express.Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: express.NextFunction,
  ) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  },
);

export { app };

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}
