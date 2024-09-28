import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { config } from './typeorm/config';
import { CoursesModule } from './courses/Courses.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthorModule } from './author/Author.module';
import { TagsModule } from './tags/Tags.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    CoursesModule,
    TagsModule,
    AuthorModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
