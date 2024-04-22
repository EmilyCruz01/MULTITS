import { Admin } from "../dominio/admin";
import { AdminRepositorio } from "../dominio/adminRepositorio";
import {EncriptServiHelpers} from "../infraestructura/helpers/EncryptHelper";


export class AddAdminCasoUso{
    constructor(readonly adminRepositorio:AdminRepositorio, readonly encryPassHelper:EncriptServiHelpers){}
    
    async run(nombre:string,password:string):Promise<Admin | null>{
        try {
            const Encrypass = await this.encryPassHelper.encodePassword(password);
            const adminCreado = await this.adminRepositorio.addAdmin(nombre,Encrypass);
            return adminCreado;
        } catch (error) {
            console.log("Error en addAdmin.Caso.Uso", error);
            return null;
        }
    }
}