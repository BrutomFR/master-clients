import { IProspectionService } from "./IProspectionService";
import { IVenteService } from './IVenteService';

export interface IService {
  date: number; // Date de la création du service pour CE client
  nom: string;
  prospection: IProspectionService;
  vente: IVenteService;
}
