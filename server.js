const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

let estadoLED = "OFF";

app.get('/led/on', (req, res) => {
  estadoLED = "ON";
  res.send("OK");
});

app.get('/led/off', (req, res) => {
  estadoLED = "OFF";
  res.send("OK");
});

app.get('/estado', (req, res) => {
  res.send(estadoLED);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo");
});