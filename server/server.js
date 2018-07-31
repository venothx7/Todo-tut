const express = require('express');
const bodyParser = require('body-parser');


var {
    mongoose
} = require('./db/mongoose');
var {
    Todo
} = require('./models/todo');
var {
    User
} = require('./models/user');
// import mongoose from './db/mongoose';
// import Todo from './models/todo';
// import User from './models/user';


var app = express();
app.use(bodyParser.json()); //send json to application

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);

    });
});


app.listen(3000, () => {
    console.log('started on port 3000');
});













//create an instance of the model
// var otherTodo = new Todo({
//     text: " learn how to fly   ",
//     completed: false,
// });

// save to the database
// otherTodo.save().then((res) => {
//     console.log(JSON.stringify(res, undefined, 2));
// }, (e) => {
//     console.log('didnt save');
// });



//instance of User
// var user = new User({
//     email: 'blabla@gmail.com   '
// });

// user.save().then((res) => {
//     console.log('User Saved', res);
// }, (e) => {
//     console.log('user not saved');
// });