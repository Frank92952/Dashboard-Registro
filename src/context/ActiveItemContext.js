// ActiveItemContext.js

import React, { createContext, useContext, useState } from 'react';

const ActiveItemContext = createContext();

export const ActiveItemProvider = ({ children }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <ActiveItemContext.Provider value={{ activeItem, setActiveItem }}>
      {children}
    </ActiveItemContext.Provider>
  );
};

export const useActiveItem = () => {
  const context = useContext(ActiveItemContext);
  if (!context) {
    throw new Error('useActiveItem must be used within an ActiveItemProvider');
  }
  return context;
};
