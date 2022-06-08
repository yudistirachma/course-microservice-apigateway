require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const mediaRouter = require('./routes/media');
const coursesRouter = require('./routes/courses');   
const chaptersRouter = require('./routes/chapters');   
const lessonsRouter = require('./routes/lessons');   
const imageCourse = require('./routes/imageCourses');
const myCourse = require('./routes/myCourses');
const review = require('./routes/reviews');
const refreshTokenRouter = require('./routes/refreshToken');
const mentorsRouter = require('./routes/mentors');
const webhookRouter = require('./routes/webhook');
const orderPaymentsRouter = require('./routes/orderPayments');

// middleware
const verifyToken = require('./middlewares/verifyToken');
const can = require('./middlewares/permission');

const app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/media', verifyToken, can('admin', 'user'), mediaRouter);
app.use('/courses', coursesRouter);
app.use('/chapters', verifyToken, can('admin'), chaptersRouter);
app.use('/lessons', verifyToken, can('admin'), lessonsRouter);
app.use('/image-courses', verifyToken, can('admin'), imageCourse);
app.use('/my-courses', verifyToken, can('admin', 'user'), myCourse);
app.use('/reviews', verifyToken, can('admin', 'user'), review);
app.use('/refresh-token', refreshTokenRouter);
app.use('/mentors',verifyToken, can('admin'), mentorsRouter);
app.use('/order-payments', verifyToken, can('admin', 'user'), orderPaymentsRouter);
app.use('/webhook', webhookRouter);

module.exports = app;
