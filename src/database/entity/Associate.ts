import { AssociateRole } from "shared";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Associate {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  address: string;

  @Column("int2", { nullable: false })
  age: number;

  @Column({ nullable: true })
  courseName: string;

  @Column("date", { nullable: true })
  graduateDate: string;

  @Column({ nullable: true })
  instituteName: string;

  @Column({ unique: true })
  license: string;

  @Column("float")
  totalFlewHours: number;

  @Column()
  isApproved: boolean;

  @Column({ type: "enum",enum: AssociateRole,nullable: false })
  role: AssociateRole;
}

