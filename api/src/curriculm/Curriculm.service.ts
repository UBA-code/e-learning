import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CurriculmEntity } from './entities/curriculm.enteties';
import { Courses } from 'src/courses/enteties/courses.enteties';

@Injectable()
export class CurriculmService {
  constructor(
    @InjectRepository(CurriculmEntity)
    private curriculmRepository: Repository<CurriculmEntity>,
    @InjectRepository(Courses)
    private courseRepository: Repository<Courses>,
  ) {}

  async associateCurriculmWithCourse(curriculmId: number, courseId: number) {
    const curriculm = await this.curriculmRepository.findOneBy({
      id: curriculmId,
    });
    const course = await this.courseRepository.findOneBy({ id: courseId });

    if (!curriculm || !course)
      throw new NotFoundException('curriculm or course not found');

    curriculm.course = course;

    return await this.curriculmRepository.save(curriculm);
  }
}
