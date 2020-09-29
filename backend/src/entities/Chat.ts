import Message from "@/entities/Message";
import User from "@/entities/User";
import { BaseEntity, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
class Chat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(type => Message, message => message.chat)
  messages: Message[];

  @OneToMany(type => User, user => user.chat)
  particpants: User[];

  @CreateDateColumn()
  creatdAt: string;

  @UpdateDateColumn()
  updaedAt: string;
}

export default Chat;