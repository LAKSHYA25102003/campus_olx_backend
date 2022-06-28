require ("dotenv").config()

const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    Message:{type:String, required:true},
});


module.exports = mongoose.model("FeedBack",contactSchema);