import {User} from '../dominio/user'
import { UserRepositorio } from '../dominio/userRepositorio'

export class GetUserByIdUseCase{
    constructor(readonly userRepositorio:UserRepositorio){}

    async run(id_user:number):Promise<User|null>{
        try{
            const result= await this.userRepositorio.getUserById(id_user);
            return result;
            
        }catch(error){
            console.log("Error en getUserByIdUseCase", error);
            return null;
        }
    }
}