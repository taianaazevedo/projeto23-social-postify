import { Injectable } from '@nestjs/common';
import { User } from './entity/User';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
    users: User[] = [];

    createUser({ name, email, password, avatar }: CreateUserDTO) {
      const user = new User(name, email, password, avatar);
      return this.users.push(user);
    }
}
