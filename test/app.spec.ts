/* eslint-disable @typescript-eslint/no-misused-promises */
import request from 'supertest';
import { app } from '../src/server';

describe('Express App (e2e)', () => {
  it('responds to GET /', (done) => {
    void request(app).get('/').expect(200).expect('Hello World!', done);
  });
});
