const express = require("express");
const mongoose = require("mongoose");
const app = express();

const pokeSchema = require('./models/pokemon');
const pokeModel = mongoose.model('pokemons', pokeSchema);

// Routes...
app.get("/", (req, res) => {
  res.status(200).json({ "msg": 111 });
});

app.get("/api/v1/pokemons", async (req, res) => {
  const localPokemons = await pokeModel.find();
  res.json(localPokemons);
});

app.get("/api/v1/pokemon/:id", async (req, res) => {
  const localPokemon = await pokeModel.findOne({ "id": req.params.id });
  console.log(localPokemon);
  res.status(200).json(localPokemon);
});

app.use(express.json());
app.put("/api/v1/pokemon/:id", async (req, res) => {
  try {
    const result = await pokeModel.findByIdAndUpdate({ 'id': req.params.id }, { 'id': req.params.id, ...req.body }, { upsert: true, new: true, overwrite: true });
    res.status(200).json({ "msg": "Pokemon updated" });
  } catch (err) {
    // console.log(err);
    res.json({ errMsg: err });
  }
});


function logErrors(err, req, res, next) {
  console.error(err.stack)
  next(err)
}

app.use(logErrors);

module.exports = app;

