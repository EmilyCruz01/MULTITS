import { User } from "../dominio/user";
import { UserRepositorio } from "../dominio/userRepositorio";

export class DeleteUserUseCase{
    constructor(readonly userRepositorio:UserRepositorio){}
    async run(id_user:number):Promise<User|null>{
        try{
            const deletedUser= await this.userRepositorio.deleteUser(id_user);
            return deletedUser;
        }catch(error){
            console.log("Error en deleteUserUseCase",error)
            return null;
        }
    }
}