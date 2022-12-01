import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { ICreatePostDto } from './dto/create-post.dto';
import { Post } from './posts.model';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private postsRepository: typeof Post,
    private filesService: FilesService,
  ) {}

  async create(dto: ICreatePostDto, image: any) {
    const fileName = await this.filesService.createFile(image);
    const post = await this.postsRepository.create({ ...dto, image: fileName });

    return post;
  }
}
