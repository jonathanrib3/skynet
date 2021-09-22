import { PrimaryGeneratedColumn } from 'typeorm';
import { Column, Entity } from 'typeorm';

@Entity()
export class Aircraft {
  @PrimaryGeneratedColumn('uuid')
  id: string
  @Column()
  model: string
  @Column()
  callSign: string
  @Column('float')
  flewHours: number
}