import { useState, useEffect, useContext, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [trigger, setTrigger] = useState(false);

  return (
    <AppContext.Provider
      value={{
        trigger,
        setTrigger,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export default useGlobalContext;
