import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='container'>
      
      <div>
        <h1>React router</h1>
      </div>
      <div className='right-box'>
        <Link to="/">HomePage</Link>
        <Link to="/mobile">Mobile</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Signup</Link>
      </div>
    </div>
  )
}

export default Navbar
