import { createContext } from "react";

export interface IContext {
 
  SizeScreenUser: {
    get: number;
    set: React.Dispatch<React.SetStateAction<number>>;
  };
}

export const Context = createContext<IContext>({} as IContext);
