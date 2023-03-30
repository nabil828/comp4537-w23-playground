const request = require('supertest');
const app = require('./app');




const mongoose = require("mongoose");
const databaseName = "test";

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${databaseName}`;
  await mongoose.connect(url, { useNewUrlParser: true });
});



describe("GET Tests", () => {
  it("GET unit test check query parameter", async () => {
    expect(1).toBe(1);
    const res = await request(app).put('/api/v1/pokemon/1').send({ "name": { "english": "test" } });
    expect(res.status).toBe(200);
    expect(res.body.msg).toBe("Pokemon updated");


    const res2 = await request(app).get('/api/v1/pokemon/1')
    expect(res2.status).toBe(200);
    expect(res2.body?.name?.english).toBe("test");
    expect(res2.body?.base?.HP).toBeUndefined();

    // add more assertions 
  });
});


afterAll(async () => {
  await mongoose.connection.close();
});


