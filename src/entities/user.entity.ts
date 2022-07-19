import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
@Unique(["email"])
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
