import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (username) => {
    setUser(username);
  };

  const signOut = () => {
    setUser(null);
  };

  const login = (username) => {
    setUser(username); 
  };

  const logout = () => {
    setUser(null); 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
