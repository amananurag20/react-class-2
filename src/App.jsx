import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mobile from "./components/Mobile";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import ThemeProvider from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import Product from "./components/Product";
const App = () => {
  return (
    <>
     <AuthProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/mobile" element={<Mobile />}></Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/product/:id/:user" element={<Product/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      </AuthProvider>
    </>
  );
};

export default App;
