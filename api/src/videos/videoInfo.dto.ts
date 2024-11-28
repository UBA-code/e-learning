import { IsString } from 'class-validator';

export class videoInfoDto {
  @IsString()
  title: string;

  @IsString()
  curriculmName: string;
}
