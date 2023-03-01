const express = require('express');
const router = express.Router();
const todoController = require('../controllers/controller');

router
    .route('/')
    .get(todoController.getAllTodo)
    .post(todoController.postTodo)

router
    .route('/:id')
    .put(todoController.updateTodo)
    .delete(todoController.deleteTodo)

module.exports = router;    