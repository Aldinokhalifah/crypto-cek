// app.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes/api');

const app = express();

// Middleware
app.use(cors({
    origin: "https://crypto-cek.vercel.app", // atau ganti dengan URL frontend-mu di vercel
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

module.exports = app; // export app, bukan listen