import React, { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  let isUserLoggedIn;
  const loginSignupContext = (userName) => {
    setUserName(userName);
    localStorage.setItem('userName',userName ); 
    let isUserLoggedIn = true;
    console.log("User signed in:",userName );
  };

  const signOutContext = () => {
    setUserName('Welcome to Wynk');
    localStorage.removeItem('userName');
    localStorage.removeItem('token'); 
    let isUserLoggedIn = false; 
    console.log("User signed out");
  };

  
  

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
