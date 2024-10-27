import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const provider = new GoogleAuthProvider();

export const AuthenticationContext = createContext(null);

export default function AuthenticationProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoadingState] = useState(false);
  const loginByGoogle = () => {
    setLoadingState(true);
    return signInWithPopup(auth, provider);
  };
  const logOut = () => {
    setLoadingState(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadingState(false);
    });
    return () => {
      return unSubscribe();
    };
  });
  const info = { user, loading, loginByGoogle, logOut };
  return (
    <AuthenticationContext.Provider value={info}>
      {children}
    </AuthenticationContext.Provider>
  );
}
