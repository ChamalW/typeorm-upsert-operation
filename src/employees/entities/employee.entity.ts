import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique('index_name', ['firstName', 'lastName'])
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  projectId: string;

  @Column()
  email: string;

  @Column()
  location: string;
}
