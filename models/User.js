const mongoose = require ('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type:String,
        Required:true
    },
    email: {
        type:String,
        Required:true,
        unique:true
    },
    password: {
        type:String,
        Required:true
    },
    date: {
        type:Date,
        default:Date.now
    },
});

module.exports = mongoose.model('user', UserSchema);