import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurriculmEntity } from './entities/curriculm.enteties';
import { CurriculmController } from './Curriculm.controller';
import { CurriculmService } from './Curriculm.service';
import { Courses } from 'src/courses/enteties/courses.enteties';

@Module({
  imports: [TypeOrmModule.forFeature([CurriculmEntity, Courses])],
  controllers: [CurriculmController],
  providers: [CurriculmService],
  exports: [CurriculmService],
})
export class CurriculmModule {}
