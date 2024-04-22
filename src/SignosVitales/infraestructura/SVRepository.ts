import {query} from '../../db/database'
import { SignosVitales } from '../dominio/signosVitales';
import { SVRepo } from '../dominio/svRepo';

export class MysqlSVRepository implements SVRepo{
    async addSigns(
        pulso: number, 
        oximetria: number,
        temperatura:number
        ): Promise<SignosVitales | null> {

        const sql = 'INSERT INTO Pagos(orden,total) VALUES (?,?)'
        const params:any[]= [pulso, oximetria, temperatura];
        try {
            const [pulso, oximetria, temperatura]: any = params;
            const signosVitales: SignosVitales = new SignosVitales(pulso, oximetria, temperatura);
            const [result] :any = await query(sql, params);
            return signosVitales;
        } catch (error) {
            return null;
        }
    }
}