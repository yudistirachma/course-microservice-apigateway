require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const mediaRouter = require('./routes/media');
const paymentsRouter = require('./routes/payments');
const coursesRouter = require('./routes/courses');
const ordersRouter = require('./routes/orders');

const app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/media', mediaRouter);
app.use('/payments', paymentsRouter);
app.use('/courses', coursesRouter);
app.use('/orders', ordersRouter);

module.exports = app;
