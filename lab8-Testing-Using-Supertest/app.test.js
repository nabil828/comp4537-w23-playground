const request = require('supertest');
const app = require('./app');



const mongoose = require("mongoose");
const databaseName = "test";

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${databaseName}`;
  await mongoose.connect(url, { useNewUrlParser: true });
});


describe('TEST POKEMON API BASIC RETRIEVAL', () => {
  it('test 1', async () => {
    // expect(1).toBe(18347549);
    const res = await request(app).post('/e1').send({ "msg": 111 });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('msg');
    expect(res.body.msg).toEqual(111);
  });
  it('test 2', async () => {
    expect(1).toBe(1);
  });

});


afterAll(async () => {
  await mongoose.connection.close();
});

