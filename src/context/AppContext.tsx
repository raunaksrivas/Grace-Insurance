import { createContext, useContext, useState, ReactNode } from 'react';

type AppContextType = {
  isQuoteModalOpen: boolean;
  setQuoteModalOpen: (open: boolean) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isQuoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <AppContext.Provider value={{ isQuoteModalOpen, setQuoteModalOpen }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
