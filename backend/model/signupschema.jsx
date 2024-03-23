const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signupschema = new Schema({
    username: String,
    email: String,
    password: String
});

const signup = mongoose.model('signup', signupschema);

module.exports = signup;
