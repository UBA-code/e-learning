import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VideoEntity } from './enteties/video.enteties';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(VideoEntity)
    private videoRepository: Repository<VideoEntity>,
  ) {}

  async getAllVideos() {
    return await this.videoRepository.find();
  }

  async getVideoById(id: number) {
    const video = await this.videoRepository.findOneBy({ id });

    if (!video)
      throw new NotFoundException(`No video found with the given id: ${id}`);

    return video;
  }
}
