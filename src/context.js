import { useState, useContext, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [trigger, setTrigger] = useState(false);
  const [hitSearch, setHitSearch] = useState(false);
  const [showCartCount, setShowCartCount] = useState(true);
  const [cart, setCart] = useState([]);
  return (
    <AppContext.Provider
      value={{
        trigger,
        setTrigger,
        hitSearch,
        setHitSearch,
        cart,
        setCart,
        showCartCount,
        setShowCartCount,
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
