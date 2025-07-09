import { useState } from "react";
import "./Login.css"

const Login = () => {

const [email, setEmail]=useState("");
const [password, setPassword]= useState("")


    const handleChange=(event)=>{
        setEmail(event.target.value);
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }

    console.log(email)
    console.log(password)
  return (
    <div className="input-div">
      
      <label htmlFor='email'>Email</label>
      <input placeholder='Email' id='email' onChange={handleChange} value={email}></input>
      <label htmlFor='pass'>Password</label>
      <input type='password' placeholder='password' id='pass' value={password} onChange={handlePassword}></input>

      <button>Login</button>
      
    </div>
  )
}

export default Login
