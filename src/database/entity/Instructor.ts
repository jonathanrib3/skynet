import { ReportsList } from '../../shared/models/interfaces/ReportsList';
import Client from '../../shared/models/Client'
import { Column, Entity } from 'typeorm'

@Entity()
export class Instructor extends Client {
  @Column()
  courseName: string;
  @Column("date")
  graduateDate: string;
  @Column()
  instituteName: string;
  
  reportsList: ReportsList;
}