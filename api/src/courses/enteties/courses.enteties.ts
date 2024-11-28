import Author from 'src/author/enteties/author.enteties';
import { CurriculmEntity } from 'src/curriculm/entities/curriculm.enteties';
import { Tags } from 'src/tags/tags.enteties';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
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

  @OneToMany(() => CurriculmEntity, (course) => course.course, {
    onDelete: 'CASCADE',
  })
  curriculm: CurriculmEntity[];

  @Column({ type: 'text', array: true })
  images: string[];

  @ManyToOne(() => Author, (author) => author.courses)
  author: Author;

  @ManyToMany(() => Tags, (tags) => tags.courses)
  @JoinTable()
  tags: Tags[];
}
