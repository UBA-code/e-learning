import { Module } from '@nestjs/common';
import { AuthorController } from './Author.controller';
import { AuthorService } from './Author.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Author from './enteties/author.enteties';

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}
