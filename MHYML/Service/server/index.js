const express = require('express');
const { getRoomData } = require('./routeHandlers.js');
const expressStaticGzip = require('express-static-gzip')

const app = express();

const PORT = 3004;
app.listen(PORT, () => { console.log(`Express server listening on port#${PORT}`); });

app.use('/', expressStaticGzip('public'));

// routes
app.get('/rooms', getRoomData);
