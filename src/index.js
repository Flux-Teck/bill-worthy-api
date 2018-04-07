import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import passport from 'passport';
import mongoose from 'mongoose';
import middleware from './middleware';
import api from './api';
import config from './config.json';


const app = express();
const server = require("http").createServer(app);

// connect to database
mongoose.Promise = require("bluebird");
mongoose.connect("mongodb://localhost:27017/billworthy");


// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({
	limit : config.bodyLimit
}));

// internal middleware
app.use(middleware({ config }));

// api router
app.use('/api', api({ config }));

server.listen(process.env.PORT || config.port, () => {
  console.log(`Started on port ${server.address().port}`);
});


export default app;
