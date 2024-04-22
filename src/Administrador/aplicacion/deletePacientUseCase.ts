import { Admin } from "../dominio/admin";
import { AdminRepositorio } from "../dominio/adminRepositorio";

export class DeleteAdminCasoUso{
    constructor(readonly adminRepositorio:AdminRepositorio){}
    async run(id_admin:number):Promise<Admin | null>{
        try {
            const eliminarAdmin = await this.adminRepositorio.deleteAdmin(id_admin);
            return eliminarAdmin;
        } catch (error) {
            console.log("Error en deleteAdmin.Caso.Uso", error);
            return null;
        }
    }
}