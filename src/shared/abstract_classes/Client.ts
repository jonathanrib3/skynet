import { Column, PrimaryGeneratedColumn } from 'typeorm';

export default abstract class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  name: string;
  @Column()
  registration: string;
  @Column()
  address: string;
  @Column("int2")
  age: number;
  @Column()
  password: string; 
  @Column()
  email: string;
}