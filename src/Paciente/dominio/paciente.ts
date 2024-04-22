export class Paciente{
    constructor(
        readonly nombre:string,
        readonly apeMaterno:string,
        readonly apePaterno:string,
        readonly fecha_nacimiento:Date,
        readonly edad:number,
        readonly ciudad:string,
        readonly direccion:string
    ){}
}