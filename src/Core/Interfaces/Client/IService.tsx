import { IProspectionService } from "./IProspectionService";
import { IVenteService } from './IVenteService';

export interface IService {
  date: Date; // Date de la création du service pour CE client
  nom: string;
  prospection: IProspectionService;
  vente: IVenteService;
}
