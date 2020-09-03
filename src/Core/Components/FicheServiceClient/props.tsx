import { IClient } from "src/Core/Interfaces/IClient";

// tslint:disable-next-line:no-empty-interface
export interface IFicheServiceClient {
    client: IClient;
    cancel: React.Dispatch<React.SetStateAction<boolean>>
}
