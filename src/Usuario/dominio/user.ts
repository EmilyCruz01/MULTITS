export class User{
    constructor(
        readonly id_user:number,
        readonly nombre:string,
        readonly apellido:string,
        readonly edad:number,
        readonly password:string
    ){}
}