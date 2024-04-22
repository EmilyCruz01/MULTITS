import{SignosVitales} from './signosVitales';

export interface SVRepo{
    addSigns(pulso:number, oximetria:number, temperatura:number):Promise<SignosVitales|null>;
}