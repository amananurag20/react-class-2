import { useState } from "react";
import "./Login.css"

const Login = () => {

// const [email, setEmail]=useState("");
// const [password, setPassword]= useState("")
// const [mobile, setMobile]=useState("");
const [formData, setFormData]=useState({
  email:"",
  password:"",
  mobile:"",
})
    const handleChange=(event)=>{
      const name=event.target.name;
      const newValue=event.target.value;

      setFormData({...formData,[name]:newValue});
    }    

    console.log(formData)

  return (
    <div className="input-div">
      
      <label htmlFor='email'>Email</label>
      <input placeholder='Email' id='email' onChange={handleChange} value={formData.email} name="email"></input>

      <label htmlFor='password'>Password</label>
      <input type='password' placeholder='password' id='password' value={formData.password} onChange={handleChange} name="password"></input>

         <label htmlFor='mobile'>mobile</label>
      <input  placeholder='mobile' id='mobile' value={formData.mobile} onChange={handleChange} name="mobile"></input>

      <button>Login</button>
      
    </div>
  )
}

export default Login
