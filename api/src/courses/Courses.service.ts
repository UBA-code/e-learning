import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Courses } from './enteties/courses.enteties';
import { Repository } from 'typeorm';
import CourseDto from './dto/course.dto';
import Author from 'src/author/enteties/author.enteties';
import { Tags } from 'src/tags/tags.enteties';
import { courseUpdateDto } from './dto/courseUpdate.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Courses)
    private coursesRepository: Repository<Courses>,
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
    @InjectRepository(Tags)
    private tagsRepository: Repository<Tags>,
  ) {}

  async getCourses() {
    return await this.coursesRepository.find({
      relations: ['author', 'tags'],
    });
  }

  async getSelectedCourses() {
    return await this.coursesRepository.find({
      relations: ['author', 'tags'],
      take: 6,
    });
  }

  async getCourseById(id: number) {
    const course = await this.coursesRepository.findOne({
      where: { id },
      relations: ['author', 'tags'],
    });
    this.checkExist(course, 'No course found with the given id');

    return course;
  }

  async createCourse(course: CourseDto, images: Array<Express.Multer.File>) {
    const author = await this.authorRepository.findOneBy({
      name: course.authorName,
    });
    const tags: Tags[] = [];

    this.checkExist(author, 'No Author found with the given name');

    for (const ele of course.tags) {
      let tag = await this.tagsRepository.findOneBy({ name: ele });
      if (!tag) {
        tag = await this.tagsRepository.save({ name: ele });
      }
      tags.push(tag);
    }

    this.coursesRepository.save({
      name: course.name,
      description: course.description,
      price: course.price,
      curriculm: course.curriculm,
      images: images.map((e) => e.path),
      author: author,
      tags: tags,
    });

    return { message: 'Course created successfully' };
  }

  async updateCourseById(
    id: number,
    updateCourse: courseUpdateDto,
    files: Array<Express.Multer.File>,
  ) {
    const course = await this.coursesRepository.findOneBy({ id });

    this.checkExist(course, 'No course found with the given id');

    Object.assign(course, updateCourse);

    return await this.coursesRepository.save(course);
  }

  async deleteCourseById(id: number) {
    const course = await this.coursesRepository.findOneBy({ id });

    this.checkExist(course, 'No course found with the given id');

    return await this.coursesRepository.remove(course);
  }

  checkExist(course: any, responseMsg: string) {
    if (!course) throw new NotFoundException(responseMsg);
  }
}
