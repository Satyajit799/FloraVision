import { createContext, useContext } from "react";
import { products } from "../api/products";
import { reviews } from "../api/reviews";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={{ products, reviews }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
