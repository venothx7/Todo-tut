var mongoose = require('mongoose');

// model of Todo
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 0,
        trim: true

    },
    completed: {
        type: Boolean,
        required: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {
    Todo
};