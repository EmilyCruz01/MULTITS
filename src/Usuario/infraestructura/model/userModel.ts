import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName:"Usuarios",
    timestamps:false
})
class UserModel extends Model{
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
    public apellido!:string

    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    public edad!:number

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    public password!:string
}

export default UserModel;