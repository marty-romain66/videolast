"use client"
import React, { createContext, useState } from 'react';

// Créez le contexte
export const MyContext = createContext({});

// Créez le fournisseur de contexte
export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState(2);

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};