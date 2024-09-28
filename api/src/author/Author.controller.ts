import {
  BadRequestException,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AuthorService } from './Author.service';

@Controller()
export class AuthorController {
  constructor(private authorService: AuthorService) {}

  @Get('authors')
  getAuthors() {
    return this.authorService.getAllAuthors();
  }

  @Get('authors/:id')
  getAuthor(@Param('id') id: number) {
    return this.authorService.getAuthorById(id);
  }

  @Post('authors')
  @HttpCode(201)
  async addNewAuthor(@Query('name') authorName: string) {
    if (!authorName) {
      throw new BadRequestException('query parameter name is required');
    }
    return await this.authorService.createAuthor(authorName);
  }

  @Put('authors/:id')
  @HttpCode(200)
  async updateAuthor(
    @Param('id', ParseIntPipe) id: number,
    @Query('name') name: string,
  ) {
    return await this.authorService.updateAuthorById(id, name);
  }

  @Delete('authors/:id')
  deleteAuthor(@Param('id', ParseIntPipe) id: number) {
    return this.authorService.deleteAuthorById(id);
  }
}
