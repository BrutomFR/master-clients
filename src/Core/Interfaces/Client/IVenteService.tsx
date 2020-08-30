import { IServiceVente } from '../Others/IServiceVente';

export interface IVenteService extends IServiceVente {
    status: boolean,
    date_vente: Date,
}