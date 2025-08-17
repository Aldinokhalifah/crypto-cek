// app.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes/api');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

module.exports = app; // export app, bukan listen