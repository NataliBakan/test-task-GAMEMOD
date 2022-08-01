const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');

const playersRouter = require('./routes/players');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/players', playersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
