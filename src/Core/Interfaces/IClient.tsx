import { IService } from "./Client/IService";

export interface IClient {
  date_creation: number;
  entreprise: string;
  type_entreprise: string;
  email: string;
  adresse: string;
  phone_number: string;
  services_client: IService[];
  unclaimed: string;
  id?: string;
}
