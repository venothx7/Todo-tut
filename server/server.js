//root of the app, first file to run
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
});

// model of Todo
var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

//create an instance of the model
var newTodo = new Todo({
    text: 'Cook Dinner2',
});

// save to the database
// newTodo.save().then((doc) => {
//     console.log('Savd Todo', doc);
// }, (e) => {
//     console.log('Unable to save the todo');
// });

var otherTodo = new Todo({
    text: 'testing',
    completed: true,
    completedAt: 20
});
otherTodo.save().then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
}, (e) => {
    console.log('didnt save');
});