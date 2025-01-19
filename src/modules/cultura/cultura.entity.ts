import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Propriedade } from '../propriedades/propriedade.entity';

@Entity('culturas')
export class Cultura {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column('date')
  safra: Date;

  @ManyToOne(() => Propriedade, (propriedade) => propriedade.culturas)
  propriedade: Propriedade;
}
