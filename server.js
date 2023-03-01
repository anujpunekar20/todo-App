const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan');

require('dotenv').config();
const app = express();

const route = require('./routes/routes');

app.use(morgan('dev'));

// connect database
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'hello from the api!'
    });
});

app.use('/api/todo', route);

// port setup
const PORT = process.env.PORT || 4000;

app.listen(PORT, '127.0.0.1', () => { 
    console.log(`Server listening or port ${PORT}`);
});