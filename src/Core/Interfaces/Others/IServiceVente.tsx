import { ICoutProduction } from '../Client/ICoutProduction';
import { ITaxe } from '../Client/ITaxe';

export interface IServiceVente {
    description_service: string,
    prix_vente: number,
    taxes: ITaxe[],
    cout_production: ICoutProduction[],
}