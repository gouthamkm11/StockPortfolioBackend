var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Creating a schema for our users model
//what fields and data type our each record should have
var userSchema = new Schema({
    googleID: String,
    username: String,
    profilePic: String,
    gender: String
});

//We have to create a model
//which will hold the collection of user records
var User = mongoose.model('users', userSchema);

module.exports = User;