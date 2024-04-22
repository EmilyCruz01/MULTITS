import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName:"Usuarios",
    timestamps:false
})
class PacienteModel extends Model{
    @Column({
        type:DataType.INTEGER,
        primaryKey:true
    })
    public id_user!:number

    @Column({
        type:DataType.STRING(20),
        allowNull:false
    })
    public nombre!:string

    @Column({
        type:DataType.STRING(20),
        allowNull:false
    })
    public apePaterno!:string

    @Column({
        type:DataType.STRING(20),
        allowNull:false
    })
    public apeMaterno!:string

    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    public edad!:number

    
    @Column({
        type:DataType.DATE,
        allowNull:false
    })
    public fecha_nacimiento!:Date 

    @Column({
        type:DataType.STRING(30),
        allowNull:false
    })
    public ciudad!:string

    @Column({
        type:DataType.STRING(20),
        allowNull:false
    })
    public direccion!:string

}

export default PacienteModel;