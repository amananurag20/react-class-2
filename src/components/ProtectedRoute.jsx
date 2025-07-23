import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [IsLoading, setIsLoading] = useState(true);

  const checkToken = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(
        `http://localhost:5000/user/check-token/${token}`
      );

      if (response.data.success) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }

      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false)
    }
  };
  useEffect(() => {
    checkToken();

    setInterval(() => {
      checkToken();
    }, 30000);

  }, []);

  if (IsLoading) {
    return <h1>....Loading</h1>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={"login"} />;
};

export default ProtectedRoute;
