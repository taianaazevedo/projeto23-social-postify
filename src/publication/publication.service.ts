import { Injectable } from '@nestjs/common';
import { Publication } from './entity/Publication';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class PublicationService {
  publication: Publication[] = [];

  createPublication({image, title, text, dateToPublish, published, socialMedia, userId}: CreatePostDTO){
    const post = new Publication(image, title, text, dateToPublish, published, socialMedia, userId)
    return this.publication.push(post)
  }
}
