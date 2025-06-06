/* eslint-disable @typescript-eslint/no-misused-promises */
import request from 'supertest';
import { app } from '../src/server';

describe('API key middleware', () => {
  it('rejects requests without API key', (done) => {
    void request(app).post('/policies').send({}).expect(401, done);
  });

  it('rejects requests with invalid API key', (done) => {
    void request(app)
      .delete('/policies/pol_001')
      .set('x-api-key', 'wrong-key')
      .expect(401, done);
  });

  it('allows requests with valid API key', (done) => {
    void request(app)
      .post('/policies')
      .set('x-api-key', 'secret-api-key')
      .send({
        id: 'test-id',
        productId: 'prod_motor',
        customerName: 'John',
        startDate: '2025-01-01',
        endDate: '2026-01-01',
        premium: 100,
        status: 'active',
        createdAt: new Date().toISOString(),
      })
      .expect(201, done);
  });
});
