"use client";
import { ThemeProvider } from "next-themes";
import { createContext, useState } from "react";

export const buttonContext=createContext()
const Providers = ({children}) => {
  const [order,setOrder] =useState([])

  const value={
    order,
    setOrder
  }

  return <buttonContext.Provider value={value}>
     <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  </buttonContext.Provider>

};

export default Providers;