import Client from '../../shared/models/Client'
import { Column, Entity } from 'typeorm'

@Entity()
export class Pilot extends Client {
  @Column()
  license: string;

}
