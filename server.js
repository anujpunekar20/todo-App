const express = require('express');
const connectDB = require('./config/db');

require('dotenv').config();
const app = express();

// connect database
connectDB();

app.use(express());
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'hello from the api!'
    });
});

// port setup
const PORT = process.env.PORT || 4000;

app.listen(PORT, '127.0.0.1', () => { 
    console.log(`Server listening or port ${PORT}`);
});