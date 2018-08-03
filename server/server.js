const express = require('express');
const bodyParser = require('body-parser');
const {
    ObjectID
} = require('mongodb');


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
const port = process.env.PORT || 3000;

app.use(bodyParser.json()); //send json to application


//add a todo
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


//get todo
app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        });
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET /todos/123432
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    //validate the id, ifnot -status:404, send back empty body
    if (!ObjectID.isValid(id)) {
        res.status(404).send("not valid id");
    }

    //findByID
    Todo.findById(id).then((todo) => {
        if (!todo) {
            res.status(404).send('no item found with id');
        }
        res.send(todo);
    }).catch((e) => {
        res.status(400).send(e);
    });
    //success
    //if todo -send it back
    //if! todo - send back 404 with empty body
    // error
    // 400 and  send empty body 
});


// DELETE
app.delete('/todos/:id', (req, res) => {
    //get the id
    const id = req.params.id;
    //validate the id, not valid then return 404
    if (!ObjectID.isValid(id)) {
        return res.status(404).send('not valid id');
    }
    //remove todo by id
    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send('no such document');
        }

        res.send(todo);

    }).catch((e) => {
        res.status(400).send(e);
    });


});


app.listen(port, () => {
    console.log(`started on port ${port}`);
});


module.exports = {
    app
};













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