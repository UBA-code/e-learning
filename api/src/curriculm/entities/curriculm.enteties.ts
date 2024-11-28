import { Courses } from 'src/courses/enteties/courses.enteties';
import { VideoEntity } from 'src/videos/enteties/video.enteties';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CurriculmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  index: number;

  @OneToMany(() => VideoEntity, (curriculm) => curriculm.curriculm, {
    onDelete: 'CASCADE',
  })
  videos: VideoEntity[];

  @ManyToOne(() => Courses, (curriculm) => curriculm.curriculm, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  course: Courses;
}
