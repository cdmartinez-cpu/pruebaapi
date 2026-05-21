const express = require('express');
const app = express();

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

app.listen(3000);