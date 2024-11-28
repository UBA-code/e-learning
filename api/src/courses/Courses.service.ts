import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Courses } from './enteties/courses.enteties';
import { Repository } from 'typeorm';
import CourseDto from './dto/course.dto';
import Author from 'src/author/enteties/author.enteties';
import { Tags } from 'src/tags/tags.enteties';
import { courseUpdateDto } from './dto/courseUpdate.dto';
import { VideoEntity } from 'src/videos/enteties/video.enteties';
import { CurriculmEntity } from 'src/curriculm/entities/curriculm.enteties';
import { CurriculmService } from 'src/curriculm/Curriculm.service';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Courses)
    private coursesRepository: Repository<Courses>,
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
    @InjectRepository(Tags)
    private tagsRepository: Repository<Tags>,
    @InjectRepository(VideoEntity)
    private videoRepository: Repository<VideoEntity>,
    @InjectRepository(CurriculmEntity)
    private curriculmRepository: Repository<CurriculmEntity>,
    private curriculmService: CurriculmService,
  ) {}

  async getCourses() {
    return await this.coursesRepository.find({
      relations: ['author', 'tags', 'curriculm'],
      order: { id: 'ASC' },
    });
  }

  async getSelectedCourses() {
    return await this.coursesRepository.find({
      relations: ['author', 'tags'],
      take: 6,
    });
  }

  async getCourseById(id: number) {
    const course = await this.coursesRepository.findOneBy({
      id,
    });
    this.checkExist(course, 'No course found with the given id');

    return await this.coursesRepository
      .createQueryBuilder('courses')
      .where('courses.id = :id', { id: id })
      .leftJoinAndSelect('courses.curriculm', 'curriculm')
      .leftJoinAndSelect('curriculm.videos', 'videos')
      .getOneOrFail();
  }

  async createCourse(
    course: CourseDto,
    images: Array<Express.Multer.File>,
    videos: Array<Express.Multer.File>,
  ) {
    const author = await this.authorRepository.findOneBy({
      name: course.authorName,
    });
    const tags: Tags[] = [];
    const curriculmsDb: CurriculmEntity[] = [];

    this.checkExist(author, 'No Author found with the given name');

    //? iterate on the request body tags and check each one of them if they exist, in not create one
    for (const ele of course.tags) {
      let tag = await this.tagsRepository.findOneBy({ name: ele });
      if (!tag) {
        tag = await this.tagsRepository.save({ name: ele });
      }
      tags.push(tag);
    }

    //? create the curriclums
    for (let i = 0; i < course.curriculm.length; i++) {
      const createdCurriculm = await this.curriculmRepository.save({
        index: i + 1,
        name: course.curriculm[i],
      });
      curriculmsDb.push(createdCurriculm);
    }

    //? save each video to it's corresponding curriculm
    for (let i = 0; i < videos.length; i++) {
      for (const curriculm of curriculmsDb) {
        if (curriculm.name === course.videoInfo[i].curriculmName) {
          await this.videoRepository.save({
            path: videos[i].path,
            title: course.videoInfo[i].title,
            curriculm: curriculm,
          });
        }
      }
    }

    const createdCourse = await this.coursesRepository.save({
      name: course.name,
      description: course.description,
      price: course.price,
      images: images.map((e) => e.path),
      author: author,
      tags: tags,
    });

    for (const curriculm of curriculmsDb) {
      await this.curriculmService.associateCurriculmWithCourse(
        curriculm.id,
        createdCourse.id,
      );
    }

    return await this.coursesRepository.findOne({
      where: { id: createdCourse.id },
      relations: ['curriculm', 'author', 'tags'],
    });
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

// const createCourseBody: CourseDto = {
//   name: 'Coffee making',
//   description:
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
//   price: 99,
//   curriculm: ['step one', 'step two', 'step three'],
//   videoInfo: [
//     {
//       title: 'video one',
//       curriculmName: 'step one',
//     },
//     {
//       title: 'video two',
//       curriculmName: 'step two',
//     },
//     {
//       title: 'video three',
//       curriculmName: 'step three',
//     },
//   ],
//   authorName: 'UBA',
//   tags: ['html', 'css', 'testing', 'unit test'],
// };
