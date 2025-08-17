// app.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes/api');

const app = express();

// Middleware
app.use(cors({
    origin: (origin, callback) => {
        if (!origin) return callback(null, true); // allow non-browser clients
        if (
        origin === "https://crypto-cek.vercel.app" ||
        /\.vercel\.app$/.test(origin)
        ) {
        callback(null, true);
        } else {
        callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', routes);

module.exports = app; // export app, bukan listen