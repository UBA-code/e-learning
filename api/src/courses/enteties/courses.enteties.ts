import Author from 'src/author/enteties/author.enteties';
import { Tags } from 'src/tags/tags.enteties';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Courses {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'integer' })
  price: number;

  @Column({ type: 'text', array: true })
  curriculm: string[];

  @Column({ type: 'text', array: true })
  images: string[];

  @ManyToOne(() => Author, (author) => author.courses)
  author: Author;

  @ManyToMany(() => Tags, (tags) => tags.courses)
  @JoinTable()
  tags: Tags[];
}