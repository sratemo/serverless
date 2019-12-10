'use strict';

const express = require('express'); 

const app = express();

app.get('/', (req, res) => {
 res.json({
  message: 'hello',
 });

 app.get('/todos', (req, res) => {
  const todos = [
   { id: 1, name: 'Clean up' }, { id: 2, name: 'Cook' }
  ]
  res.json({
   data: todos
  });
 })
})


module.exports = app;