import { Injectable } from '@nestjs/common';
import { Publication } from './entity/Publication';

@Injectable()
export class PublicationService {
  publication: Publication[] = [];

  createPublication({image, title, text, dateToPublish, published, socialMedia, userId}: Publication){
    const post = new Publication(image, title, text, dateToPublish, published, socialMedia, userId)
    return this.publication.push(post)
  }
}
