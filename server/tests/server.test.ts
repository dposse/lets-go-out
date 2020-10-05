import 'mocha';
import chai, { expect } from 'chai';
import request from 'supertest';
import chaiHttp from 'chai-http';
import { Server } from 'http';

let server: Server;

chai.use(chaiHttp);

describe('server - ', () => {
  beforeEach(() => {
    server = require('../server');
  });
  afterEach(() => {
    server.close();
  });

  // There is a coverage bug in istanbul, this should cover root route
  it('should serve public html file', async () => {
    const response = await request(server)
      .get('/')
      .expect('Content-Type', /html/)

    console.log(response);
    expect(response.status).to.equal(200);
  });

  it('should send 404 on undefined route', async () => {
    await request(server)
      .get('/fake-route')
      .end((err, res) => {
        res.text.should.equal('That\'s a 404 folks...')
        res.should.have.status(404);
      });
  });
});
