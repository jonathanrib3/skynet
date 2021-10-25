import { Class } from 'database/entity';
import { JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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
  


  constructor(model: string, callSign: string, flewHours: number) {
    this.model = model
    this.callSign = callSign
    this.flewHours = flewHours
  }
}