import { Link } from "react-router-dom"
import "./Navbar.css"
import { useContext } from "react"
import {ThemeContext} from "../context/ThemeContext"
import { useSelector } from "react-redux"

const Navbar = () => {
  const {setTheme,theme}=useContext(ThemeContext);
   
  const items= useSelector((store)=>store.cart.items);
  console.log(items)


  const handleClick=()=>{
    if(theme=="dark"){
      setTheme("light");
    }else{
      setTheme("dark")
    }
  }
  return (
    <div className='container'>
      
      <div>
        <h1>React router</h1>
      </div>
      <div className='right-box'>
        <button onClick={handleClick}>Change theme</button>
        <Link to="/home">HomePage</Link>
        <Link to="/mobile">Mobile</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Signup</Link>
         <Link to={"/cart"}>Cart<sup>{items.length}</sup></Link>
      </div>
    </div>
  )
}

export default Navbar
