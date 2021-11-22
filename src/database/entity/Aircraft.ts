import { PrimaryGeneratedColumn } from 'typeorm';
import { Column, Entity } from 'typeorm';

@Entity()
export default class Aircraft {
  @PrimaryGeneratedColumn('uuid')
  id: string
  @Column({nullable: false})
  model: string
  @Column({unique: true, nullable: false})
  callSign: string
  @Column('float')
  flewHours: number
  
}