import { IPrixFabrication } from './IPrixFabrication';
import { ITaxe } from './ITaxe';

export interface IVenteService {
    status: boolean,
    description_service: string,
    prix_vente: number,
    taxes: ITaxe[],
    prix_fabrication: IPrixFabrication[],
}