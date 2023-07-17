import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { AuthGuard } from 'src/auth/authGuard/auth.guard';
import { UserRequest } from '../auth/decorators/user-decorator';
import { User } from 'src/user/entity/User';

@Controller('publication')
export class PublicationController {
  constructor(
    private readonly publicationService: PublicationService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  createPost(@Body() body: CreatePostDTO, @UserRequest() user: User) {
    return this.publicationService.createPublication({...body, userId: user.id});
  }
}
