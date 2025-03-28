const mongoose = require('mongoose');

const loginSchema = mongoose.Schema(
    {
        name : {
            type:String,
            required:true
        },
        email : {
            type:String,
            required:true
        },
        password : {
            type:String,
            required:true
        }
    },
    {
        timestamps:true,
    }
);


const Login = mongoose.model('Loginform',loginSchema);

module.exports = Login;