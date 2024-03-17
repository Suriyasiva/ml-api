import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./base.entity";
import { IsEmail } from "class-validator";

// if entity name is not specified entity class name will be assigned as table name
@Entity({ name: "user" })
export class User extends BaseEntity {


    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ name: "first_name", length: 500 })
    firstName: string;

    @Column({ name: "last_name", length: 500 })
    lastName: string;

    @Column()
    @IsEmail()
    email: string

}
