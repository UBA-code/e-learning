import { IsNumber, IsString } from 'class-validator';

export default class AuthorDto {
  @IsString()
  name: string;

  @IsNumber()
  total_courses: number;

  @IsNumber()
  rating: number;
}
