import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addUser(data: CreateUserDTO) {
   return await this.prisma.user.create({ data: data });
  }

  async findAllUsers() {
    return await this.prisma.user.findMany({});
  }

  async findUserByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  async findUserById(id: number) {
    return await this.prisma.user.findFirst({ where: { id } });
  }
}