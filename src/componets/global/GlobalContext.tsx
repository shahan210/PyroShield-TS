import { createContext, useContext, useState } from "react";
const GlobalContext = createContext({});

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  // const [images, setImages] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
        // images,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
