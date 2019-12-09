'use strict';

const express = require('express');
const http = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
 res.json({
  message: 'hello'
 });

 app.get('/todo', (req, res) => {
  res.json( {
   message: "toDos"
  });
 })
})


module.exports.handler = http(app);