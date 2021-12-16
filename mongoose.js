var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Admin:Admin123@mydb.bzkzz.mongodb.net/nydb?retryWrites=true&w=majority');
console.log("mongodb connect...")
module.exports=mongoose;