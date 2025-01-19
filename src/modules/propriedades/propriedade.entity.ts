import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Produtor } from '../produtor/entities/produtor.entity';
import { Cultura } from '../cultura/entities/cultura.entity';

@Entity('propriedades')
export class Propriedade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column('float')
  areaTotal: number;

  @Column('float')
  areaAgricultavel: number;

  @Column('float')
  areaVegetacao: number;

  @ManyToOne(() => Produtor, (produtor) => produtor.propriedades)
  produtor: Produtor;

  @OneToMany(() => Cultura, (cultura) => cultura.propriedade)
  culturas: Cultura[];
}
