import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Author from './enteties/author.enteties';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  async getAllAuthors() {
    return this.authorRepository.find();
  }

  async getAuthorById(id: number) {
    const author = await this.authorRepository.findOneBy({ id });
    this.checkExist(author);

    return author;
  }

  async createAuthor(authorName: string) {
    const author = await this.authorRepository.findOneBy({ name: authorName });
    if (author) throw new ConflictException('Author name already exist');
    return await this.authorRepository.save({ name: authorName });
  }

  async updateAuthorById(id: number, authorName: string) {
    const author = await this.authorRepository.findOneBy({ id });
    this.checkExist(author);

    author.name = authorName;
    return await this.authorRepository.save(author);
  }

  async deleteAuthorById(id: number) {
    const author = await this.authorRepository.findOneBy({ id });
    this.checkExist(author);

    await this.authorRepository.delete(id);
    return author;
  }

  checkExist(author: Author) {
    if (!author)
      throw new NotFoundException(`No author found with the given id`);
  }
}
