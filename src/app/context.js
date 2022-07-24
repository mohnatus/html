import { createContext, useContext } from "react";

const Context = createContext();
const DispatchContext = createContext();

export function useAppContext() {
  return useContext(Context);
}

export function useAppDispatchContext() {
  return useContext(DispatchContext);
}

export function AppContextProvider({ value, children }) {
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function AppDispatchContextProvider({ value, children }) {
  return (
    <DispatchContext.Provider value={value}>
      {children}
    </DispatchContext.Provider>
  );
}