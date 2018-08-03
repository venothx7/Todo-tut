const {
    ObjectID
} = require('mongodb');

const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');
const {
    User
} = require('./../server/models/user');

var id = '5b622c1d71af4d3be4d7675a';
var UserID = '5b64c97dde436b1f60d12747'

if (!ObjectID.isValid(id)) {
    console.log('Id not valid by objectID');
}
if (!ObjectID.isValid(UserID)) {
    console.log('UserID not valid by objectID');
}

// you get an empty array if item does not exist
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// you get an null if item does not exist
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// // you get an null if item does not exist
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         console.log('id not found');
//     }
//     console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

//User.findById
// if usr not found, 
User.find({
    email: '333@gmail.com'
}).then((user) => {
    if (user.length === 0) {
        return console.log('user not found');
    }
    console.log(user);
})