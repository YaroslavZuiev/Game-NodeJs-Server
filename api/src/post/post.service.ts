import {BadRequestException, Injectable} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Post} from "./entities/post.entity";
import {Repository} from "typeorm";

@Injectable()
export class PostService {
  constructor(@InjectRepository(Post) private readonly repo:Repository<Post> ) {
  }
  async create(createPostDto: CreatePostDto) {
    return await this.repo.insert(createPostDto);
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: number):Promise<Post> {
    const post = await this.repo.findOne({where: {id: id}});
    if(!post){
      throw new BadRequestException('Wrong user id');
    }

    return post;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.repo.update(id,updatePostDto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
