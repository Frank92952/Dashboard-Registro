import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export function useSidebar() {
  return useContext(SidebarContext);
}

export function SidebarProvider({ children }) {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <SidebarContext.Provider value={{ sidebarVisible, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}
