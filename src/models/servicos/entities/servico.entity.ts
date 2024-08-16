import { Salao } from 'src/models/salao/entities/salao.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Servico {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Salao, (salao) => salao.id)
  salao: number;

  @Column()
  titulo: string;

  @Column()
  preco: number;

  @Column()
  comissao: string;

  @Column()
  duracao: number;

  @Column()
  recorrencia: string;

  @Column()
  descricao: string;

  @Column()
  status: string;

  @Column()
  dataCadastro: Date;
}
