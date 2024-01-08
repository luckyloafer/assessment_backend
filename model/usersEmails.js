const mongoose  = require('mongoose');

const usersEmailSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:[String]
    }
    
})

const usersEmails = new mongoose.model("usersEmails",usersEmailSchema);

module.exports = usersEmails;
