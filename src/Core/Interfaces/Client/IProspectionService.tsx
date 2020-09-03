import { ICoutProduction } from "./ICoutProduction";

export interface IProspectionService {
  date_envoie: number,
  status: boolean,
  couts_production: ICoutProduction[]
}
