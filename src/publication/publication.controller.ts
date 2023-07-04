import { Body, Controller, Post } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePostDTO } from './dto/create-post.dto';

@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

    @Post()
    createPost(@Body() body: CreatePostDTO){
      return this.publicationService.createPublication(body)
    }
  
}
