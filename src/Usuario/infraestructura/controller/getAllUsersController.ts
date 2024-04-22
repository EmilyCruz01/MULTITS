import { Request, Response } from "express";
import { GetAllUsersUseCase } from "../../aplicacion/getAllUsersUseCase";
import UserModel from "../model/userModel";

export class GetAllUsersController {
    constructor(readonly getAllUsers: GetAllUsersUseCase) {}
    
    async run(req: Request, res: Response) {
        try {
            const users: UserModel[] | null = await UserModel.findAll();
            console.log('users: ');
            if (users) {
                res.status(200).send({
                    status: 'success',
                    data: users.map(user => ({
                        id_user: user.id_user,
                        nombre: user.nombre,
                        apellido: user.apellido,
                        edad: user.edad,
                        password: user.password
                    }))
                });
            } else {
                return res.status(400).send({
                    status: 'error',
                    data: [],
                    message: 'Error al buscar usuarios en GetAllUsersController'
                });
            }
        } catch (error) {
            console.log('Error en GetAllUsersController:', error);
            res.status(500).send({
                status: 'error',
                message: 'Error en el servidor'
            });
        }
    }
}