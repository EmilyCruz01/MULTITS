import { SignosVitales } from "../signosVitales";

export interface INewSigns {
    sendSigns(signosVitales:SignosVitales):Promise<boolean>;
}