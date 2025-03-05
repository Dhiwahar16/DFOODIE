import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAuth } from "../../features/LoginAuth/LoginAuthSlice";
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "user@gmail.com" && password === "1") {
      setError("");
      dispatch(loginAuth(true)); 
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login" >
      <div className="login1">
      <h2 className="login-h2" >Login</h2>
      <div className="login-form" >
      <form className="login-form1" onSubmit={handleLogin}>
        <div className="login-form2">
        <input className="login-int1" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="login-int1" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <p className="logintxt" >{error}</p>}
        <button className="login-btn" type="submit">Login</button>
      </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
