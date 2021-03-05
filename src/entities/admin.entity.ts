import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";


@Entity()
export class Admin extends BaseEntity{
    @ObjectIdColumn()
    id:ObjectID

    @Column()
    username:string

    @Column()
    password:string

}