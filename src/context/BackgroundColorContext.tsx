"use client";
import React, { createContext, useState, useContext, ReactNode } from 'react';

type BackgroundColorContextType = {
  currentColor: string;
  setCurrentColor: (color: string) => void;
};

const BackgroundColorContext = createContext<BackgroundColorContextType | undefined>(undefined);

export const BackgroundColorProvider = ({ children }: { children: ReactNode }) => {
  const [currentColor, setCurrentColor] = useState('transparent');

  return (
    <BackgroundColorContext.Provider value={{ currentColor, setCurrentColor }}>
      {children}
    </BackgroundColorContext.Provider>
  );
};

export const useBackgroundColor = () => {
  const context = useContext(BackgroundColorContext);
  if (context === undefined) {
    throw new Error('useBackgroundColor must be used within a BackgroundColorProvider');
  }
  return context;
};
