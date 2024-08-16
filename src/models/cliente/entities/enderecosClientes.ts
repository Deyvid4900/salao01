import { Entity,Column, OneToOne } from "typeorm";
import { Cliente } from "./cliente.entity";


@Entity()
export class Enderecos {
    @OneToOne(()=>Cliente,(cliente)=>cliente.id)
    id:number;

    @Column()
    cidade:string;

    @Column()
    uf:string;

    @Column()
    cep:string;

    @Column()
    logradouro:string;

    @Column()
    numero:string;

    @Column()
    pais:string;

}
