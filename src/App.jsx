import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mobile from "./components/Mobile";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import ThemeProvider from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import Product from "./components/Product";
import Rating from "./components/Rating";
import Food from "./components/Food";
import ProtectedRoute from "./components/ProtectedRoute";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
const App = () => {
  return (
    <>
    <Provider store={appStore}>
      <AuthProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<ProtectedRoute />}>
                   <Route path="/mobile" element={<Mobile />} />
                   <Route path="/home" element={<HomePage />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/product/:id/:user" element={<Product />} /> 
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
      </Provider>
    </>
  );
};

export default App;
