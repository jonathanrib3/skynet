import { Aircraft, Associate } from './';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export default class Flight {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column('float')
  flewHours: number;

  @ManyToOne(type => Aircraft)
  aircraft: Aircraft;

  @ManyToOne(type => Associate)
  associate: Associate;
}