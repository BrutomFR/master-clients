import { IServiceProspection } from "./IServiceProspection";
import { IServiceVente } from "./IServiceVente";

export interface IServiceInfos {
  date: Date; // Date de la création du service
  nom: string;
  vente: IServiceVente;
  prospection: IServiceProspection;
}
