import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');

  const loginSignupContext = (userName) => {
    setUserName(userName);
    localStorage.setItem('userName',userName ); 
    console.log("User signed in:",userName );
  };

  const signOutContext = () => {
    setUserName('');
    localStorage.removeItem('userName'); 
    console.log("User signed out");
  };

  let isUserLoggedIn = !!userName; 

  const value = { userName, loginSignupContext, signOutContext, isUserLoggedIn };

  return (
    <UserContext.Provider value={value}>{
      children}
    </UserContext.Provider>
  );
};

export function useUser() {
  return useContext(UserContext);
}
