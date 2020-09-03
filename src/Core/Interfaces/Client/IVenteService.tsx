import { ICoutProduction } from "./ICoutProduction";
import { ITaxe } from "./ITaxe";

export interface IVenteService {
    status: boolean,
    date_vente: number,
    couts_production: ICoutProduction[],
    taxes: ITaxe[],
    prix_vente: number
}