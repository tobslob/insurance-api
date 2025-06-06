import request from 'supertest';
import { app } from '../src/server';

describe('Policy validation', () => {
  it('rejects invalid payload on POST', async () => {
    await request(app)
      .post('/policies')
      .set('x-api-key', 'secret-api-key')
      .send({ id: 123 })
      .expect(400);
  });

  it('rejects invalid payload on PUT', async () => {
    await request(app)
      .put('/policies/pol_001')
      .set('x-api-key', 'secret-api-key')
      .send({ premium: 'invalid' })
      .expect(400);
  });
});
