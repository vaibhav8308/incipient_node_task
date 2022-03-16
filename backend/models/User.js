const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    
    },
    Last_name: {
        type: String,
        required: true,
        
    },
    age: {
        type:Number,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        default: true,
        unique:true
    },



});
module.exports = mongoose.model("User", UserSchema);