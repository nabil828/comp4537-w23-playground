const request = require('supertest');

const app = require('./app');


const mongoose = require("mongoose");
const databaseName = "test";

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${databaseName}`;
  await mongoose.connect(url, { useNewUrlParser: true });
});



describe("Test suite 1", () => {
  it("unit test 1 ", async () => {
    const res = await request(app).get('/api/v1/pokemons')
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(809)
  });


});

afterAll(async () => {
  await mongoose.connection.close();
});
