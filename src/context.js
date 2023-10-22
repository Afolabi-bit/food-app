import { useState, useContext, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [trigger, setTrigger] = useState(false);
  const [hitSearch, setHitSearch] = useState(false);

  return (
    <AppContext.Provider
      value={{
        trigger,
        setTrigger,
        hitSearch,
        setHitSearch,
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
