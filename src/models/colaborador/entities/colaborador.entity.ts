import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Colaborador {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nome:string;

    @Column()
    telefone:string;

    @Column()
    email:string;

    @Column()
    senha:string;

    @Column()
    dataNascimento:Date;

    @Column()
    sexo:string;

    @Column()
    status:string;

    @Column()
    dataCadastro:Date;
}
