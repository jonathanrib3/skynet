import { Aircraft } from './Aircraft';
import { Instructor } from './Instructor';
import { Student } from './Student';
import { 
  Column, 
  Entity, 
  ManyToOne,
  ManyToMany, 
  JoinTable, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'


@Entity()
export class Class {

  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @ManyToMany(type => Instructor, {cascade: true})
  @JoinTable()
  instructor: Instructor[]

  @ManyToMany(type => Student, {cascade: true})
  @JoinTable()
  students: Student[]

  @OneToOne(type => Aircraft)
  @JoinColumn()
  aircraft: Aircraft

  @Column()
  description: string

  @Column('float')
  flewHours: number

  @Column()
  isSolo: boolean

  @Column('date')
  endTime: string

  @Column('date')
  startTime: string
}