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
  
  reportsList: Class[];
}