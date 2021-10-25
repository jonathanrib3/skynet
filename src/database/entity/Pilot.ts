import { Class } from 'database/entity';
import Client from '../../shared/abstract_classes/Client'
import { Column, Entity, ManyToOne } from 'typeorm'

@Entity()
export class Pilot extends Client {
  @Column()
  license: string;
}
