import { Module } from '@nestjs/common';
import { CoursesController } from './Courses.controller';
import { CoursesService } from './Courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Courses } from './enteties/courses.enteties';
import Author from 'src/author/enteties/author.enteties';
import { Tags } from 'src/tags/tags.enteties';
import { VideoEntity } from 'src/videos/enteties/video.enteties';
import { CurriculmEntity } from 'src/curriculm/entities/curriculm.enteties';
import { CurriculmModule } from 'src/curriculm/Curriculm.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Courses,
      Author,
      Tags,
      VideoEntity,
      CurriculmEntity,
    ]),
    CurriculmModule,
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
