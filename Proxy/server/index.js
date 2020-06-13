const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express()
const PORT = 3000;

app.use(express.json());
app.use('/', (req, res, next) => {
  console.log(` ${req.method} request from ${req.originalUrl}`);
  console.log(req.body);
  next();
});

app.use(express.static(path.join(__dirname, '../public/')));

app.get('/rooms/:roomID/reviews', (req, res) => {
  axios.get(`http://localhost:3001/rooms/2/reviews`)
  .then(result => res.status(200).send(result.data))
  .catch(err => console.log(err));
});

app.get('/rooms/:roomID/reviews/:phrase', (req, res) => {
  axios.get(`httt://localhost:3001/rooms/2/reviews/${req.params.phrase}`)
  .then(result => res.status(200).send(result.data))
  .catch(err => console.log(err));
});

app.get('/carousel', (req, res) => {
  axios.get(`httt://localhost:3003/carousel`)
  .then(result => res.status(200).send(result.data))
  .catch(err => console.log(err));
});

app.get('/rooms', (req, res) => {
  axios.get(`httt://localhost:3004/rooms`)
  .then(result => res.status(200).send(result.data))
  .catch(err => console.log(err));
});

app.get('/data', (req, res) => {
  axios.get(`httt://localhost:3002/data`)
  .then(result => res.status(200).send(result.data))
  .catch(err => console.log(err));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Cannot connect to server through port ${PORT}`);
  } else {
    console.log(`Server is listening on port: ${PORT}`);
  }
});
