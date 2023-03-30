const express = require("express");
const mongoose = require("mongoose");
const app = express();

const pokeSchema = require('./models/pokemon');
const pokeModel = mongoose.model('pokemons', pokeSchema);

// Routes...
app.get("/e1", (req, res) => {
  res.status(201).json({"msg":111});
});

app.get("/api/v1/pokemons", async (req, res) => {
  const localPokemons = await pokeModel.find();
  res.json(localPokemons);
});

app.get("/api/v1/pokemon/:id", async (req, res) => {
  const localPokemon = await pokeModel.findOne({ "id": req.params.id });
  console.log(localPokemon);
  res.json(localPokemon);
});

app.use(express.json());
app.put("/api/v1/pokemon/:id", async (req, res) => {
  try {
    const result = await pokeModel.replaceOne({ 'id': req.params.id }, { 'id': req.params.id, ...req.body }, { upsert: true, new: true });
    res.send("Pokemon updated");
  } catch (err) {
    // console.log(err);
    res.json({ errMsg: err });
  }
});


// function logErrors(err, req, res, next) {
//   console.error(err.stack)
//   next(err)
// }

// app.use(logErrors);

module.exports = app;

