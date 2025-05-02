import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
const ProfileContext = createContext();

function ProfileProvider({ children }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    address: "",
    about: "",
  });

  const [isUpdating, setIsUpdating] = useState(false);

  const { user } = useAuth();
  //
  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const db = getFirestore();
        const userDoc = doc(db, "users", user.uid);
        const userSnapshot = await getDoc(userDoc);
        if (userSnapshot.exists()) {
          setForm(userSnapshot.data());
        }
      }
    };

    fetchData();
  }, [user]);

  //
  async function handleSubmit(e) {
    e.preventDefault();
    setIsUpdating(true);
    const db = getFirestore();
    try{
        await setDoc(
            doc(db, "users", user.uid),
            {
              ...form,
              email: user.email,
              updatedAt: new Date().toISOString(),
            },
            { merge: true }
        )
        console.log("Profile updated successfully");
    }
    catch(error){
        console.warn("An error occurred in handle submit for profile component");
    }
    finally{
        setIsUpdating(false);
    }
  }

  //
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <ProfileContext.Provider
      value={{
        form,
        setForm,
        handleChange,
        handleSubmit,
        isUpdating,
        setIsUpdating,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileProvider;
export const useProfile = function () {
  return useContext(ProfileContext);
};
