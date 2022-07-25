import { createContext, useContext } from "react";

const Context = createContext();
const DispatchContext = createContext();

export function useActiveLessonContext() {
  return useContext(Context);
}

export function useActiveLessonDispatchContext() {
  return useContext(DispatchContext);
}

export function ActiveLessonContextProvider({ value, children }) {
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function ActiveLessonDispatchContextProvider({ value, children }) {
  return (
    <DispatchContext.Provider value={value}>
      {children}
    </DispatchContext.Provider>
  );
}