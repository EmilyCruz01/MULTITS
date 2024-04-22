import{User} from './user';

export interface UserRepositorio{
    addUser(id_user:number, nombre:string, apellido:string, edad:number, password:string):Promise<User|null>;
    getUserById(id_user:number):Promise<User|null>;
    getAllUsers():Promise<User[] | null>;
    deleteUser(id_user:number):Promise<User|null>;
}