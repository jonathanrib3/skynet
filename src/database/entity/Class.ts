import { Aircraft, Instructor, Student} from './'
import { 
  Column, 
  Entity, 
  ManyToMany, 
  JoinTable, 
  PrimaryGeneratedColumn} from 'typeorm'


@Entity()
export class Class {

  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @ManyToMany(
    type => Instructor, 
    {nullable: false, cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  @JoinTable()
  instructors: Instructor[]

  @ManyToMany(
    type => Student,
    {nullable: false, cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  @JoinTable()
  students: Student[]

  @ManyToMany(
    type => Aircraft, 
    {nullable: false, cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  @JoinTable()
  aircrafts: Aircraft[]

  @Column()
  description: string

  @Column('float')
  flewHours: number

  @Column()
  isSolo: boolean

  @Column('date')
  endDate: string

  @Column('date')
  startDate: string
}