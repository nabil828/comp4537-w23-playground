const request = require('supertest');
const app = require('./app');



const mongoose = require("mongoose");
const databaseName = "test";

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${databaseName}`;
  await mongoose.connect(url, { useNewUrlParser: true });
});


describe('testing GET', function () {
  it('GET test 1', async function () {
    
    const res = await request(app)
      .put('/e1')
      .send({ "msg": 111 });
    expect(res.status).toBe(201);
    // console.log(res);
    expect(res.body.msg).toBe(111);
  });

  it('GET test 2', function () {
    expect(1).toBe(1);
  });
});


afterAll(async () => {
  await mongoose.connection.close();
});
