import { createContext } from "react";

const initialState = {
  first: "HIIIII",
  last: "ELLLLLO"
};

export type UserState = typeof initialState

const context = createContext<UserState>(initialState);

export default context;