import { useState } from "react";
import "./Login.css"
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {

// const [email, setEmail]=useState("");
// const [password, setPassword]= useState("")

const [formData, setFormData]=useState({
  email:"",
  password:"",

})
    const handleChange=(event)=>{
      const name=event.target.name;
      const newValue=event.target.value;

      setFormData({...formData,[name]:newValue});
    }    

    
    const handleClick=async()=>{
      try{
        const response= await axios.post("http://localhost:5000/user/login",formData);
         
        if(response.data.success){
           toast.success("Login success");

           localStorage.setItem("token",response.data.token);


        }
        else{
          toast.error("Login failed")
        }
       

      }catch(error){
        console.log(error);
      }

        
    }

  return (
    <div className="input-div">
      
      <label htmlFor='email'>Email</label>
      <input placeholder='Email' id='email' onChange={handleChange} value={formData.email} name="email"></input>

      <label htmlFor='password'>Password</label>
      <input type='password' placeholder='password' id='password' value={formData.password} onChange={handleChange} name="password"></input>

       

      <button onClick={handleClick}>Login</button>
      
    </div>
  )
}

export default Login
