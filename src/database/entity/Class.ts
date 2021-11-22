import { Aircraft, Associate } from './'
import { 
  Column, 
  Entity, 
  ManyToMany, 
  JoinTable, 
  PrimaryGeneratedColumn} from 'typeorm'


@Entity()
export default class Class {

  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @ManyToMany(
    type => Associate, 
    {nullable: false, cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  @JoinTable()
  associates: Associate[]
    
  @ManyToMany(
    type => Aircraft, 
    {nullable: false, cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  @JoinTable()
  aircrafts: Aircraft[]

  @Column()
  description: string

  @Column('float')
  flewHours: number

  @Column('date')
  endDate: string

  @Column('date')
  startDate: string
}