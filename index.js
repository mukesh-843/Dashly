require('dotenv').config()
const express=require('express')
const port=5451
const db=require('./config/mongoose');
const app=express()


app.use(express.json())
app.use('/',require('./routes/index'))


app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})