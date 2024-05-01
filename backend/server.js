const express = require('express')
const mongoose = require("mongoose");
const todoRoutes = require('./routes/todoRoutes');
const bodyParser = require('body-parser');
const cors= require('cors')


const app = express()
mongoose.connect('mongodb://localhost:27017/usersdb').then( () => console.log("Connected"));

app.use(cors({
    origin: '*',
}));


app.use(bodyParser.json())
app.use('/todo', todoRoutes)

const PORT=4000
app.listen(PORT,() => {
    console.log(`server started on port ${PORT}`)
})