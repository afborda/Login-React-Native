import React, { createContext, useReducer } from "react";
import { initialState, UserReducer } from "../reducers/UserReducer";

export const UserContext = createContext();

export const ContextAuth = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
