import { randomUUID } from "crypto";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Permission } from "./Permission";

@Entity("roles")
class Role {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToMany(() => Permission)
    @JoinTable({
      name: "permissions_roles",
      joinColumns: [{ name: "role_id" }],
      inverseJoinColumns: [{ name: "permission_id" }],
    })
    permissions: Permission[];

    constructor() {
        if (!this.id) {
          this.id = randomUUID();
        }
    }
}

export { Role };
