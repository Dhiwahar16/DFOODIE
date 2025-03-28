const Login = require('../models/login.models.js');


//show Details
const getDetails = async (req,res) => {
    try {
        const login = await Login.find({});
        if(!login){
            res.status(404).json({message : "Page not found"});
        }
        res.status(200).json(login);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

//get a user Details
const getSingleDetails = async (req,res) => {
    try {
        const {id} = req.params;
        const login = await Login.findById(id);
        if(!login){
            res.status(404).json({message : "Page not found"});
        }
        res.status(200).json(login);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

//post Details or add new //included in frontend
const postDetails = async (req,res) => {
    const {name,email,password} = req.body;
    try {
        const userExits = await Login.findOne({ email });
        if(userExits){
            return res.status(401).json({message:"email already exists, try login!"});
        }
        const newUser = await Login.create({name,email,password});
        return res.status(200).json({ message: "User registered successfully!", newUser });
    } catch (error) {
        return res.status(500).json({message : error.message});
    }
}

//update details
const updateDetails = async (req,res) => {
    try {
        const {id} = req.params;
        const login = await Login.findByIdAndUpdate(id,req.body);
        if(!login){
            res.status(404).json({message : "Page not found"});
        }
        const updatedLogin = await Login.findById(id);
        res.status(200).json(updatedLogin);
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

//delete Details
const deleteDetails = async (req,res) => {
    try {
        const {id} = req.params;
        const login = await Login.findByIdAndDelete(id);
        if(!login){
            res.status(404).json({message : "Page not found"});
        }
        res.status(200).json({message : "Login Details Deleted"});
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}

module.exports = {
    getDetails,
    getSingleDetails,
    postDetails,
    updateDetails,
    deleteDetails
}