import { Router } from "express";

import { Todo } from "../models/todo"; // name export
import { type } from "os";

type RequestBody = {text:string}; // Type casting (req.body.text)
type RequestParams = {todoId:string}

let todos: Todo[] = []; // array full of Todo

const router = Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({todos:todos})
});

router.post('/todo', (req, res, next)=>{
    const body = req.body as RequestBody; // This is called Type Casting
    const newTodo : Todo = {
        id: new Date().toISOString(),
        text:body.text,
    };
    todos.push(newTodo); // add newTodo to todos list
    res.status(201).json({message:'added todo', todo:newTodo, todos:todos})
});

// dynamic route, update todo
router.put('/todo/:todoId', (req, res, next)=>{
    const params = req.params as RequestParams;
    const tid = params.todoId
    const body = req.body as RequestBody;
    const todoIndex = todos.findIndex(todoItem=> todoItem.id===tid); // Todo Index I wanna update
    // verify if the index exists
    if(todoIndex>=0){
        todos[todoIndex] = {
            id:todos[todoIndex].id,
            text:body.text
        } // update the Todo of this index

        return res.status(200).json({message:'updated todo', todos:todos});
    }
    res.status(404).json({message:'Could not find todo for this id.'})
});

router.delete('/todo/:todoId', (req, res, next)=>{
    const params = req.params as RequestParams;
    const tid = params.todoId
    todos = todos.filter(todoItem=> todoItem.id !==tid); // todos without the Todo with this id
    res.status(200).json({message:'deteted todo', todos:todos})
});

export default router; // export in Typescript