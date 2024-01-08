const mongoose  = require('mongoose');

const navLogoSchema = new mongoose.Schema({
    navLogoURL:{
        type:String,
        required:true
    }

})

const navLogos = new mongoose.model("navLogos",navLogoSchema);

module.exports = navLogos;