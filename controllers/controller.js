const Todo = require('../models/todo');

exports.getAllTodo = async (req, res) => {
    try{
        const todo = await Todo.find();

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

exports.postTodo = async (req, res) => {
    try{
        const todo = await Todo.create(req.body);

        res.status(201).json({
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

exports.updateTodo = async (req, res) => {
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);

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

exports.deleteTodo = async (req, res) => {
    try{
        const todo = await Todo.findByIdAndRemove(req.params.id, req.body);

        res.status(204).json({
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