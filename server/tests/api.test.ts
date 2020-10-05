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
    await request(server)
      .get('/api/current-time')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('time');
        expect(new Date(res.body.time).getDate()).equal(new Date().getDate());
      });
  });
});
