import { IServiceProspection } from '../Others/IServiceProspection';

export interface IProspectionService extends IServiceProspection{
  date_envoie: Date,
  status: boolean,
}
