import { Client } from '../../shared'
import { Column, Entity, ManyToOne } from 'typeorm'

@Entity()
export class Pilot extends Client {
  @Column()
  license: string;
}
