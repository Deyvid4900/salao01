import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Salao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomeSalao: string;

  @Column()
  emailSalao: string;

  @Column()
  telefoneSalao: string;

  @Column()
  senhaSalao: string;

  @Column()
  enderecoSalao: number;

  @Column()
  geoType: string;

  @Column()
  geoCordinates: string;

  @Column()
  dataCadastro: Date;

}
