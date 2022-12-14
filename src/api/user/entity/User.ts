import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("users")
class User {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: string;
    
    constructor(){
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export default User;
