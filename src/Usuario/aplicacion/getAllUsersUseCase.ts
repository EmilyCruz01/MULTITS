import {User} from '../dominio/user'
import { UserRepositorio } from '../dominio/userRepositorio'

export class GetAllUsersUseCase{
    constructor(readonly userRepositorio:UserRepositorio){}

    async run():Promise<User[]|null>{
        try{
            const result= await this.userRepositorio.getAllUsers();
            return result;
            
        }catch(error){
            console.log("Error en getAllUsersUseCase", error);
            return null;
        }
    }
}