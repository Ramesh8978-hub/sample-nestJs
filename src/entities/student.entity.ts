import { Entity, BaseEntity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity()
export class Student extends BaseEntity{

    @ObjectIdColumn()
    id:ObjectID
    
    @Column()
    name:string

    @Column()
    email:string

    @Column()
    password:string

}