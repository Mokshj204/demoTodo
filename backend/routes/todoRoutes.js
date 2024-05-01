const express = require('express')
const { createTodo, getAllTodos, getTodosById, DeleteTodosById, UpdateTodosById } = require('../controllers/todoControllers')
// const { getAllTodos } = require('../controllers/todoControllers')

const router = express.Router()


router.post('/create-todos',createTodo)
router.get('/get-all-todos',getAllTodos)
router.get('/get-todos-by-id/:todoid', getTodosById)
router.delete('/delete-todos-by-id/:todoid', DeleteTodosById)
router.put('/updatetodosbyid/:todoid',UpdateTodosById)


module.exports = router