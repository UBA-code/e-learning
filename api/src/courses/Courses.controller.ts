import {
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
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuid4 } from 'uuid';
import CourseDto from './dto/course.dto';
import { courseUpdateDto } from './dto/courseUpdate.dto';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get('')
  getCourses() {
    return this.coursesService.getCourses();
  }

  @Get('selected')
  getSelectedCourses() {
    return this.coursesService.getSelectedCourses();
  }

  @Get(':id')
  getCourse(@Param('id', ParseIntPipe) id: number) {
    return this.coursesService.getCourseById(id);
  }

  @Post()
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
  newPost(
    @Body() course: CourseDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    return this.coursesService.createCourse(course, files);
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
}
