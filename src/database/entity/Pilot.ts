import Client from '../../shared/abstract_classes/Client'
import { Column, Entity } from 'typeorm'

@Entity()
export class Pilot extends Client {
  @Column()
  license: string;

}
