import { BrowserRouter, Route, Routes } from "react-router-dom"
import Mobile from "./components/Mobile"
import HomePage from "./components/HomePage"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Navbar from "./components/Navbar"
import { useState } from "react"
import ThemeContext from "./context/ThemeContext"

const App = () => {

  const [theme, setTheme]= useState("dark");
  const [auth, setAuth]= useState(true);
  return (
    <>
    <ThemeContext.Provider value={{theme,setTheme,auth,setAuth}}>
    <BrowserRouter>
    <Navbar/>
       <Routes>
         <Route path="/mobile" element={<Mobile/>}/>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/signup" element={<Signup/>}/>
       </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
    </>
  )
}

export default App
