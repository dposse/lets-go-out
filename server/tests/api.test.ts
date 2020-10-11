import 'mocha';
import chai, { should, expect } from 'chai';
import request from 'supertest';
import chaiHttp from 'chai-http';
import { Server } from 'http';
let server: Server;

chai.use(chaiHttp);

describe('REST api - ', () => {
  beforeEach(() => {
    server = require('../server');
  });

  afterEach(() => {
    server.close();
  });

  it('should pass /current-time', async () => {
    const response = await request(server)
      .get('/api/current-time')

      expect(response.status).to.equal(200);
      expect(new Date(response.body.time).getDate()).equal(new Date().getDate());
  });
});
