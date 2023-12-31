require('dotenv').config()
const express=require('express')
const port=5451||process.env.PORT;
const db=require('./config/mongoose');
const app=express()
const cors=require('cors');
const path=require('path');

app.use(cors())
app.use(express.json())
app.use('/api/',require('./routes/index'))

app.get('/',(req,res)=>{
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
})

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})