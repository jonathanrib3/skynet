import { Client } from '../../shared';
import { Column, Entity} from 'typeorm';


@Entity()
export class Student extends Client {
  @Column()
  isApproved: boolean
  
}