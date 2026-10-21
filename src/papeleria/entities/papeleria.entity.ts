import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Papeleria {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: 'varchar', length: 50})
    name!: string;

    @Column({  type: 'int', })
    price: number;
    
    @Column({type: 'varchar', length:  100})
    description: string;   

}
