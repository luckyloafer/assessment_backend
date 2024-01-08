const mongoose  = require('mongoose');

const headerButtontextSchema = new mongoose.Schema({
    headerBtnText:{
        type:String,
        required:true
    }

})

const headerBtnTexts = new mongoose.model("headerBtnTexts",headerButtontextSchema);

module.exports = headerBtnTexts;