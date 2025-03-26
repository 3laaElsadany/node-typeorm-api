import { BaseEntity, PrimaryGeneratedColumn, Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { Client } from "./Client";

export enum TransactionType {
  DESPOSIT = "desposit",
  WITHDRAW = "withdraw"
}


@Entity("transaction")
export class Transaction extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: TransactionType
  })
  type: string;

  @Column({
    type: "numeric"
  })
  amount: number;

  @ManyToOne(
    () => Client,
    client => client.transactions, {
    onDelete: "CASCADE"
  }
  )
  @JoinColumn({
    name: "client_id"
  })
  client: Client;
}