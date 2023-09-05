const mongoose=require('mongoose')

mongoose.connect(process.env.MONGO_URL)
const db=mongoose.connection;

db.once('open',()=>{
    console.log(`Connection Successfull`);
})

db.on('error',()=>{
    console.log("Error in mongodb connection");
})


module.exports=db;