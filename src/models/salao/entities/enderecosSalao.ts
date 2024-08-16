import { Entity,Column, OneToOne } from "typeorm";
import { Salao } from "./salao.entity";



@Entity()
export class Enderecos {
    @OneToOne(()=>Salao,(Salao)=>Salao.id)
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
