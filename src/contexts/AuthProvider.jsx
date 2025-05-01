import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useState } from "react";
import app from "../pages/firebase";

const auth = getAuth(app);
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (loggedInUser) => {
    setUser(loggedInUser);
  });
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export function useAuth(){
    return useContext(AuthContext)
}
