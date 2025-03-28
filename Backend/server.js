const express = require('express');
const PORT  = process.env.PORT || 9000;
const cors = require('cors');
const mongoose = require('mongoose');
const loginRouter = require('./routes/login.routes.js')
const Login = require('./models/login.models.js')
const app = express();

//middleware to pass json
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

//routes
app.use('/signup',loginRouter);

//homepage
app.get('/',(req,res)=>{
    res.send("Homepage Of Website");
})

//post login page for login
app.post('/login', async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await Login.findOne({email});
        if(!user){
            return res.status(401).json({message:"Email not found, please sign up!"});
        }
        if(password !== user.password){
            return res.status(401).json({message:"invalid password"});
        }
        return res.status(200).json({message:"login successfull"});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
})


//database connection
mongoose.connect("mongodb://localhost:27017/")
.then(() => {
    console.log("Connected to database");
    app.listen(PORT,() => {
        console.log(`Server is connected to PORT : ${PORT}`);
    });
})
.catch(() => {
    console.log("Not Connected to database");
})
