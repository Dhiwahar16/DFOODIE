const express=require('express');
const app=express();
const port=5000;

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("server is ready");
});

app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`);
});