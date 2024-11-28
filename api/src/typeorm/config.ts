import Author from 'src/author/enteties/author.enteties';
import { Courses } from 'src/courses/enteties/courses.enteties';
import { CurriculmEntity } from 'src/curriculm/entities/curriculm.enteties';
import { Tags } from 'src/tags/tags.enteties';
import { VideoEntity } from 'src/videos/enteties/video.enteties';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [Courses, Author, Tags, VideoEntity, CurriculmEntity],
  synchronize: true,
};
