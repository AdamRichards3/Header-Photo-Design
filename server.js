'use strict';

const express = require('express');

const app = express();

app.use(express.static(__dirname));
app.use(express.static("public"));
app.use(express.json());

app.listen(8080, (err) => {
    console.log('Server running on http://localhost:8080')
  if (err) console.error('Error starting server', err);
  else console.log('Server Started');
});

app.post('/post-test', (req, res) => {
  console.log('got body:', req.body);
  res.sendStatus(200);
});

function error(res, msg) {
  res.sendStatus(500);
  console.error(msg);
}

