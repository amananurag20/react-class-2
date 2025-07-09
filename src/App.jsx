import { BrowserRouter, Route, Routes } from "react-router-dom"
import Mobile from "./components/Mobile"
import HomePage from "./components/HomePage"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
       <Routes>
         <Route path="/mobile" element={<Mobile/>}/>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
