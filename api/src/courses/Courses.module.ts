import { Module } from '@nestjs/common';
import { CoursesController } from './Courses.controller';
import { CoursesService } from './Courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Courses } from './enteties/courses.enteties';
import Author from 'src/author/enteties/author.enteties';
import { Tags } from 'src/tags/tags.enteties';

@Module({
  imports: [TypeOrmModule.forFeature([Courses, Author, Tags])],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
