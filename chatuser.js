var mongoose=require('./mongoose');
var schemaChatUser=new mongoose.Schema({
    username:{ 
        type: String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    }
 })
var ChatUser=mongoose.model("ChatUsers",schemaChatUser);
module.exports=ChatUser;