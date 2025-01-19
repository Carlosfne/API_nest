import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Propriedade } from '../../propriedades/propriedade.entity';

@Entity()
export class Produtor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cpfCnpj: string;

  @OneToMany(() => Propriedade, (propriedade) => propriedade.produtor)
  propriedades: Propriedade[];
}
