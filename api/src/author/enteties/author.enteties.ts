import { Courses } from 'src/courses/enteties/courses.enteties';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: true })
  name: string;

  @Column({ type: 'integer', default: 0 })
  total_courses: number;

  @Column({ type: 'float', default: 0 })
  rating: number;

  @OneToMany(() => Courses, (courses) => courses.author)
  courses: Courses[];
}
