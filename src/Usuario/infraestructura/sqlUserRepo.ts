import {User} from '../dominio/user';
import {UserRepositorio} from '../dominio/userRepositorio';
import UserModel from './model/userModel';

export class SqlUserRepo implements UserRepositorio{
    async addUser(id_user: number, nombre: string, apellido: string, edad: number, password: string): Promise<User | null> {
        try{
            const createdUser = await UserModel.create({id_user,nombre,apellido,edad,password});
            return new User(createdUser.id_user,createdUser.nombre,createdUser.apellido,createdUser.edad,createdUser.password)
        }catch(error){
            console.log('Error en sqlUserRepo AddUser',error);
            return null;
        }
    }

    async getUserById(id_user: number): Promise<User | null> {
        try{
            const getUserId =await UserModel.findOne({where:{id_user:id_user}});
            if(getUserId){
                await getUserId.get();
                return new User(getUserId.id_user, getUserId.nombre,getUserId.apellido,getUserId.edad,getUserId.password)
            }else{
                return null;
            }
        } catch(error){
            console.log('error en sqlUserRepo getUserId',error);
            return null;
        }
    }

    async getAllUsers() {
        try {
            
            const allUsers= await UserModel.findAll();
            if (allUsers) {
                return allUsers.map((user:any) => ({
                    id_user: user.id_user,
                    nombre: user.nombre,
                    apellido: user.apellido,
                    edad: user.edad,
                    password: user.password
                }));
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error en getAllUsers:', error);
            return null;
        }
    }

    async deleteUser(id_user: number): Promise<User | null> {
        try {
            const deletedUser= await UserModel.findOne({where: {id_user:id_user}});
            if(deletedUser){
                await deletedUser.destroy();
                return new User(deletedUser.id_user,deletedUser.nombre,deletedUser.apellido, deletedUser.edad, deletedUser.password);
            }else{
                return null;
            }
        } catch (error) {
            console.log("Error en sqlUserRepo en DeleteUser", error);
            return null;
        }
    }
}