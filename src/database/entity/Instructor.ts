import { Class } from 'database/entity/Class';
import { ReportsList } from '../../shared/interfaces/ReportsList';
import Client from '../../shared/abstract_classes/Client'
import { Column, Entity } from 'typeorm'

@Entity()
export class Instructor extends Client {
  @Column()
  courseName: string;
  @Column("date")
  graduateDate: string;
  @Column()
  instituteName: string;
  
  constructor(
    registration: string, address: string, age: number, password: string, 
    courseName:string, email: string, graduateDate: string, instituteName: string,) {
    
      super()
      this.registration = registration
      this.address = address
      this.age = age 
      this.password = password
      this.courseName = courseName
      this.email = email
      this.graduateDate = graduateDate
      this.instituteName = instituteName
  }
} 