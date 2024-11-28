import { CurriculmEntity } from 'src/curriculm/entities/curriculm.enteties';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VideoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  path: string;

  @ManyToOne(() => CurriculmEntity, (video) => video.videos, {
    onDelete: 'CASCADE',
  })
  curriculm: CurriculmEntity;
}
