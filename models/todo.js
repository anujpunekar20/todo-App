const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Todo must a title'],
        unique: [true, 'Todo must by unique'],
    },
    description: {
        type: String,
    },
});

const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;