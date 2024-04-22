import {User} from '../dominio/user';
import { UserRepositorio } from '../dominio/userRepositorio';
import { EncriptServiHelpers } from '../infraestructura/helpers/EncryptHelper';


export class AddUserUseCase{
    constructor(readonly userRepositorio:UserRepositorio, readonly encryptPassHelper:EncriptServiHelpers){}

    async run(id_user:number, nombre:string, apellido:string, edad:number, password:string):Promise<User|null>{
        try{
            const Encrypass=await this.encryptPassHelper.encodePassword(password);
            const createdUser= await this.userRepositorio.addUser(id_user,nombre,apellido,edad,Encrypass);
            return createdUser;
            
        }catch(error){
            console.log("Error en addUserUseCase", error);
            return null;
        }
    }
}