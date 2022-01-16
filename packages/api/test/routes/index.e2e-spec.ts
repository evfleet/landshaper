import request from 'supertest';
import server from '../../src/server';

const app = request(server);

describe('/', () => {
  it('should return 200', async () => {
    const response = await app.get('/');

    expect(response.status).toBe(200);
  });
});
