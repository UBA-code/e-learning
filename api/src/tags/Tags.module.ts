import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tags } from './tags.enteties';

@Module({
  imports: [TypeOrmModule.forFeature([Tags])],
})
export class TagsModule {}
