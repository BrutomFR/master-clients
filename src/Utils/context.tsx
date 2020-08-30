import { createContext } from "react";
import { IClient } from 'src/Core/Interfaces/IClient';

export interface IContext {
 
  SizeScreenUser: {
    get: number;
    set: React.Dispatch<React.SetStateAction<number>>;
  };
  Clients: {
    get: IClient[];
    set: React.Dispatch<React.SetStateAction<IClient[]>>;
  };
}

export const Context = createContext<IContext>({} as IContext);
