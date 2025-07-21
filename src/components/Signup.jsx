import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword]=useState("");


  const handleClick=async()=>{
      const response= await axios.post("http://localhost:5000/user/signup",{
        name:name,
        password,
        email
      });

      if(response.data.success){
       toast.success("Signup success");
     
      }
      else{
        toast.warning("Signup failed")
      }     
  }

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '50px auto', 
      padding: '20px', 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
        Name
      </label>
      <input
        placeholder="name"
        id="name"
        onChange={function(e){
          setName(e.target.value);
        }}
        value={name}
        style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      
      <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
        Email
      </label>
      <input
        placeholder="email"
        id="email"
        onChange={function(e){
          setEmail(e.target.value);
        }}
        value={email}
        style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      
      <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
        Password
      </label>
      <input
        placeholder="password"
        id="password"
        type="password"
        onChange={function(e){
          setPassword(e.target.value);
        }}
        value={password}
        style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
      />

      <button onClick={handleClick}>Signup</button>
    </div>
  );
};

export default Signup;
