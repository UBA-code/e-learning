import { Courses } from 'src/courses/enteties/courses.enteties';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tags {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Courses, (courses) => courses.tags)
  courses: Courses[];
}
