import Client from '../../shared/abstract_classes/Client';
import { Column, Entity} from 'typeorm';


@Entity()
export class Student extends Client {
  @Column()
  isApproved: boolean

}