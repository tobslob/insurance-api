/* eslint-disable @typescript-eslint/no-misused-promises */
import request from 'supertest';
import { app } from '../src/server';

describe('Policy validation', () => {
  it('rejects invalid payload on POST', (done) => {
    void request(app)
      .post('/policies')
      .set('x-api-key', 'secret-api-key')
      .send({ id: 123 })
      .expect(400, done);
  });

  it('rejects invalid payload on PUT', (done) => {
    void request(app)
      .put('/policies/pol_001')
      .set('x-api-key', 'secret-api-key')
      .send({ premium: 'invalid' })
      .expect(400, done);
  });
});
