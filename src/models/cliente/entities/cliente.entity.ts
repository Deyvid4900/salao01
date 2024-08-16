import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nomeCliente:string;

    @Column()
    telefoneCliente:string;

    @Column()
    emailCliente:string;

    @Column()
    senhaCliente:string;

    @Column()
    dataNascimento:Date;

    @Column()
    endereco:number;
    
    @Column()
    dataCadastro:Date;
}
