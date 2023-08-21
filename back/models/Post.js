const mongoose = require("mongoose")

const Postschema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    decs:{
        type:String,
       max:500
    },
    img:{
        type:String,
          },
    likes:{
        type:Array,
        default:[]
        },
},
{timestamps:true});


module.exports = mongoose.model("post",Postschema);