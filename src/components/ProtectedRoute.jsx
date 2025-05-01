import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({children}) {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  if(!user) navigate("/login")

  if (user) return children;
}

export default ProtectedRoute;
