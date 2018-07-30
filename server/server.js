//root of the app, first file to run
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
});

// model of Todo
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true

    },
    completed: {
        type: Boolean,
        required: true
    },
    completedAt: {
        type: Number,
        default: null
    }
});


//create an instance of the model
var otherTodo = new Todo({
    text: " learn how to fly   ",
    completed: false,
});

// save to the database
// otherTodo.save().then((res) => {
//     console.log(JSON.stringify(res, undefined, 2));
// }, (e) => {
//     console.log('didnt save');
// });

// User Mdel, email, name
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

//instance of User
var user = new User({
    email: 'blabla@gmail.com   '
});

user.save().then((res) => {
    console.log('User Saved', res);
}, (e) => {
    console.log('user not saved');
})