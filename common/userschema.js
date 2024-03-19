const mongoose = require('mongoose');

const user= mongoose.Schema({
    userName:{type:String},
    Age:{type:String},
    DOB:{type:String},
    Location:{type:String}
})

const userDB = mongoose.model('khan',user);

module.exports = userDB;