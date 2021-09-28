import Client from '../../shared/models/Client';
import { Column, Entity} from 'typeorm';


@Entity()
export class Student extends Client {
  @Column()
  isApproved: boolean

}