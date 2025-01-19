import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Propriedade } from '../../propriedades/propriedade.entity';

@Entity()
export class Cultura {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  safra: string;

  @Column()
  dataPlantio: Date;

  @Column()
  dataColheita: Date;

  @ManyToOne(() => Propriedade, (propriedade) => propriedade.culturas)
  propriedade: Propriedade;
}
