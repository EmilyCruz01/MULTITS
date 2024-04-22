import { Admin } from "./admin";

export interface AdminRepositorio{
    addAdmin(nombre:string,password:string):Promise<Admin | null>;
    deleteAdmin(id_admin:number):Promise<Admin | null>;
    getIdAdmin(id_admin:number):Promise<Admin | null>;
}