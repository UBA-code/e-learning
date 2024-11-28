import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { videoInfoDto } from 'src/videos/videoInfo.dto';

export default class CourseDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  price: number;

  @IsArray()
  @IsNotEmpty()
  @Type(() => Array)
  curriculm: string[];

  @IsString()
  @IsNotEmpty()
  authorName: string;

  @IsArray()
  @Type(() => Array)
  tags: string[];

  @IsArray()
  @Type(() => Array<videoInfoDto>)
  videoInfo: videoInfoDto[];
}
