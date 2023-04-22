import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Post} from "../../post/entities/post.entity";

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstName: string;
    @Column()
    lastName: string;
    @Column()
    password: string;
    @Column()
    email: string;

    @OneToMany(()=> Post,(post)=> post.user)
    post:Post[];
}
