import { useContext, createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/firebase.js";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userRole, setUserRole] = useState("normal");
  // ? checking the login state of user via useeffect and onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      if (currentUser?.email == "anshpradhan03@gmail.com") {
        setUserRole("admin");
      } else {
        setUserRole("normal");
      }
    });
    return unsubscribe;
  }, []);

  // ? FUNCTION TO SIGN IN WITH GOOGLE
  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
  };

  // ? FUNCTION TO LOG OUT THE USER
  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ signIn, logOut, user, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const userAuth = () => {
  return useContext(AuthContext);
};
