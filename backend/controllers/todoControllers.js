const { response } = require('express')
const Todo = require('../models/todo')

exports.createTodo = (req,res) => {
    let todo = new Todo(req.body)

    todo.save(req.body).then(response =>{
        res.json({
            message : response,
            success:true 
        })
        }).catch(err => {
            res.json({
                error:err,
                success :false
            })
    })    
}


exports.getAllTodos = (req, res) => {
    Todo.find().then(response => {
        res.send({
            response
        })
    }).catch(err => {
        res.send({
            success: false,
            error: err
        })
    })
}

exports.getTodosById = (req, res) => {
    Todo.findById(req.params.todoid).then(response => {
        res.send({
            response
        })
    }).catch(err => {
        res.send({
            success: false,
            error: err
        })
    })
}


exports.DeleteTodosById = (req, res) => {
    Todo.findByIdAndDelete(req.params.todoid, {new:true}).then(response => {
        res.send({
            response
        })
    }).catch(err => {
        res.send({
            success: false,
            error: err
        })
    })
}


exports.UpdateTodosById = (req, res) => {
    console.log(req.body)
    Todo.findByIdAndUpdate(req.params.todoid,req.body, {new: true}).then(response => {
        res.send({
            response

        })
    }).catch(err => {
        res.send({
            success: false,
            error: err
        })
    })
}

