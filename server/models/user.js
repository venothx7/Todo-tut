var mongoose = require('mongoose');
// User Mdel, email, name
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

module.exports = {
    User
};