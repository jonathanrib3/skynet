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
  
  @ManyToOne(type => Instructor,)
  @JoinColumn()
  instructorId: Instructor

  @ManyToMany(type => Student)
  @JoinTable()
  studentId: Student

  @OneToOne(type => Aircraft)
  @JoinColumn()
  aircraftId: Aircraft

  @Column()
  description: string

  @Column('time')
  flewHours: number

  @Column()
  isSolo: boolean

  @Column('date')
  endTime: string

  @Column('date')
  startTime: string
}