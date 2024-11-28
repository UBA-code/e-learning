import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { CoursesService } from './Courses.service';
import {
  FileFieldsInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuid4 } from 'uuid';
import CourseDto from './dto/course.dto';
import { courseUpdateDto } from './dto/courseUpdate.dto';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get('')
  async getCourses() {
    return await this.coursesService.getCourses();
  }

  @Get('selected')
  async getSelectedCourses() {
    return await this.coursesService.getSelectedCourses();
  }

  @Get(':id')
  async getCourse(@Param('id', ParseIntPipe) id: number) {
    return await this.coursesService.getCourseById(id);
  }

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      [{ name: 'courseImg', maxCount: 3 }, { name: 'videos' }],
      {
        storage: diskStorage({
          destination: './uploads',
          filename: (req, file, callback) => {
            const uniqueSuffix = uuid4();
            const ext = extname(file.originalname);
            callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
          },
        }),
      },
    ),
  )
  newCourse(
    @Body() course: CourseDto,
    @UploadedFiles()
    files: {
      courseImg?: Express.Multer.File[];
      videos?: Express.Multer.File[];
    },
  ) {
    if (!files.courseImg || !files.videos) {
      throw new BadRequestException('No files provided');
    }
    return this.coursesService.createCourse(
      course,
      files.courseImg,
      files.videos,
    );
  }

  @Patch(':id')
  @UseInterceptors(
    FilesInterceptor('courseImg', 3, {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix = uuid4();
          const ext = extname(file.originalname);
          callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  updateCourse(
    @Body() course: courseUpdateDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.coursesService.updateCourseById(id, course, files);
  }

  @Delete(':id')
  deleteCourse(@Param('id', ParseIntPipe) id: number) {
    return this.coursesService.deleteCourseById(id);
  }

  private validateImages(images: Express.Multer.File[]) {
    const maxSize = 10 * 1024 * 1024; // 10 MB
    const allowedMimeTypes = /^image\/.+$/;

    for (const image of images) {
      if (image.size > maxSize) {
        throw new BadRequestException(
          `Image ${image.originalname} exceeds the size limit of 10MB.`,
        );
      }
      if (!allowedMimeTypes.test(image.mimetype)) {
        throw new BadRequestException(
          `File ${image.originalname} is not a valid image type.`,
        );
      }
    }
  }
}
