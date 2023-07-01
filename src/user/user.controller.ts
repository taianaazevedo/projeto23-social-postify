import { Body, Post, Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/User';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() body: User) {
    return this.userService.createUser(body)
  }

}
