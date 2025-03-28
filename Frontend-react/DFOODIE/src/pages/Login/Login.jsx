//Login for registered user connected with backend

import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAuth } from "../../features/LoginAuth/LoginAuthSlice";
import "./login.css"
import axios from 'axios';

const Login = () => {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const signUpPage = async () => {
    if(login === true){
      setLogin(false);
      setMessage("");
    }
    else{
      setLogin(true);
      setMessage("");
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9000/login',{
        email:email,
        password:password
      });
      setMessage("login successfull");
      console.log("user details : ",response.data.user);
      dispatch(loginAuth(true));
    } catch (error) {
      if(error.response && error.response.data && error.response.data.message){
        setMessage(error.response.data.message);
      }
      else if (error.request) {
        setMessage("Server not responding. Please check your internet connection.");
      } 
      else{
        setMessage(error.message);
      }
    }
  };

    const handleSignUp = async (e) => {
      e.preventDefault();

      try {
        const createUser = await axios.post('http://localhost:9000/signup/',{
          name:userName,
          email:email,
          password:password
        });
        
        setMessage("Signed up, now login");
        console.log("New User Details:",createUser.data.newUser);

      } catch (error) {
        if(error.response && error.response.data && error.response.data.message){
          setMessage(error.response.data.message);
        }
        else if (error.request) {
          setMessage("Server not responding. Please check your internet connection.");
        }
        else{
          setMessage(error.message);
        }
      }
    }

  return (
    <div>
    {!login ? (
      <div className="login" >
      <div className="login1">
      <h2 className="login-h2" >Login</h2>
      <div className="login-form" >
      <form className="login-form1" onSubmit={handleLogin}>
        <div className="login-form2">
        <input className="login-int1" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="login-int1" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {message && <p className="logintxt" >{message}</p>}
        <button className="login-btn" type="submit">Login</button>
        <div className="signup" >
        <p>Don't have an account ?</p><button className="sign-up-btn" onClick={signUpPage} >Sign up</button>
        </div>
      </form>
      </div>
      </div>
    </div>
    ) : (
      <div className="login" >
        <div className="login1">
      <h2 className="login-h2" >Sign Up</h2>
      <div className="login-form" >
      <form className="login-form1" onSubmit={handleSignUp}>
        <div className="login-form2">
        <input className="login-int1" type="text" placeholder="Enter your name" value={userName} onChange={(e) => setUserName(e.target.value)} required />
        <input className="login-int1" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="login-int1" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {message && <p className="logintxt" >{message}</p>}
        <button className="login-btn" type="submit">Sign up</button>
        <div className="signup" >
        <p>Already have an account ?<button className="sign-up-btn" onClick={signUpPage} >Login</button></p>
        </div>
      </form>
      </div>
      </div>
      </div>
    )}
  </div>
  );

};

export default Login;
