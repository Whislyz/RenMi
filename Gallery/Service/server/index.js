const express = require('express');
const app = express();
const cors = require('cors')
const pool = require('../database/index')
const path = require('path');
const expressStaticGzip = require('express-static-gzip')


const PORT = 3003;

// const {getImage} = require('./controller.js')

//middleware
app.use(cors());  //need npm i cors
app.use(express.json())

// app.use(express.static(path.join(__dirname, '../client/dist')))

app.use('/', expressStaticGzip(path.join(__dirname, '../client/dist')))

//routes
app.get('/carousel', async (req, res) => {
  try {
    const image = await pool.query('SELECT * FROM imageArray')
    res.json(image)
  } catch (err) {
    console.error(err.message)
  }
});


app.listen(PORT, console.log(`Server listening on port ${PORT}`))