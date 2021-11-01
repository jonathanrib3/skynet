import { Client } from '../../shared'
import { Column, Entity } from 'typeorm'

@Entity()
export class Instructor extends Client {
  @Column()
  courseName: string;
  @Column("date")
  graduateDate: string;
  @Column()
  instituteName: string;
  
} 