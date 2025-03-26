import { Entity, Column, ManyToMany, JoinColumn, JoinTable } from "typeorm"
import { Person } from "./utils/Person";
import { Client } from "./Client";

@Entity("banker")
export class Banker extends Person {

  @Column({
    unique: true,
    length: 10
  })
  employee_number: string;

  @ManyToMany(
    () => Client
  )
  @JoinTable({
    name: "banker_clients",
    joinColumn: {
      name: "bank",
      referencedColumnName: "id"
    },
    inverseJoinColumn: {
      name: "client",
      referencedColumnName: "id"
    }
  })
  clients: Client[];
}
