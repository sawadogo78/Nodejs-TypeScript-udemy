"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = []; // array full of Todo
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body; // This is called Type Casting
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo); // add newTodo to todos list
    res.status(201).json({ message: 'added todo', todo: newTodo, todos: todos });
});
// dynamic route, update todo
router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const tid = params.todoId;
    const body = req.body;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid); // Todo Index I wanna update
    // verify if the index exists
    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: body.text
        }; // update the Todo of this index
        return res.status(200).json({ message: 'updated todo', todos: todos });
    }
    res.status(404).json({ message: 'Could not find todo for this id.' });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const tid = params.todoId;
    todos = todos.filter(todoItem => todoItem.id !== tid); // todos without the Todo with this id
    res.status(200).json({ message: 'deteted todo', todos: todos });
});
exports.default = router; // export in Typescript
