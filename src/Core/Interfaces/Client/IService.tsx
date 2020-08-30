import { IProspectionService } from './IProspectionService';
import { IVenteService } from './IVenteService';

export interface IService {
    nom: string,
    date: Date,
    prospection: IProspectionService,
    vente: IVenteService,
}