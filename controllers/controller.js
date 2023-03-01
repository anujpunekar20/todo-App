const Todo = require('../models/todo');

exports.getAllTodo = (req, res) => {
    try{
        const todo = Todo.find();

        res.status(200).json({
            status: 'success',
            data: {
                todo
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
}

exports.postTodo = (req, res) => {
    try{
        const todo = Todo.create(req.body);

        res.status(200).json({
            status: 'success',
            message: 'data created',
            data: {
                todo
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
}

exports.updateTodo = (req, res) => {
    try{
        const todo = Tour.findByIdAndUpdate(req.params.id, req.body);

        res.status(200).json({
            status: 'success',
            message: 'data updated',
            data: {
                todo
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
}

exports.deleteTodo = (req, res) => {
    try{
        const todo = Todo.findByIdAndRemove(req.params.id, req.body);

        res.status(202).json({
            status: 'success',
            message: 'data deleted',
            data: {
                todo
            }
        })
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err.message
        })
    }
}