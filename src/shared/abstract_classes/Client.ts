import { Column, PrimaryGeneratedColumn } from "typeorm";

export default abstract class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({nullable: false})
  name: string;
  @Column({unique: true})
  registration: string;
  @Column()
  address: string;
  @Column("int2")
  age: number;
  @Column({nullable: false})
  password: string;
  @Column({unique: true, nullable: false})
  email: string;
}
