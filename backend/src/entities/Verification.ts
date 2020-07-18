import { verificationTarget } from "src/types/types";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
class Verification extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", enum: ["PHONE", "EMAIL"] })
  target: verificationTarget;

  @Column({ type: "text" })
  paylaod: string;

  @Column({ type: "text" })
  key: string;

  @Column({ type: "boolean", default: false })
  used: boolean;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updateAt: string;
}

export default Verification;