const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        reqired:true
    },
    email:{
        type:String,
        reqired:true,
        unique:true
    },
    password:{
        type:String,
        reqired:true
    },
    github:{
        type:String,
    },
    linkedin:{
        type:String,
    },
    profilePic:{
        type:String,
    }
})

const users = mongoose.model("users",userSchema)

module.exports = users