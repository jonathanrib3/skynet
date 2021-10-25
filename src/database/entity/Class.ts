import { Aircraft, Instructor, Student, Pilot } from './'
import { 
  Column, 
  Entity, 
  ManyToOne,
  ManyToMany, 
  JoinTable, 
  JoinColumn, OneToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm'


@Entity()
export class Class {

  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @ManyToMany(type => Instructor, {nullable: false, cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  @JoinTable()
  instructors: Instructor[]

  @ManyToMany(type => Student, {nullable: false, cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  @JoinTable()
  students: Student[]

  @ManyToMany(type => Aircraft, {nullable: false, cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  @JoinTable()
  aircrafts: Aircraft[]

  @ManyToMany(type => Pilot, {nullable: false, cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE'})
  @JoinTable()
  pilot: Pilot[]

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