import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Propriedade } from '../propriedades/propriedade.entity';

@Entity('produtores')
export class Produtor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nome: string;

  @Column({ unique: true })
  cpfCnpj: string;

  @OneToMany(() => Propriedade, (propriedade) => propriedade.produtor)
  propriedades: Propriedade[];
}
