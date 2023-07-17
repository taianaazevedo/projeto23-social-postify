import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { AuthGuard } from 'src/auth/authGuard/auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/user/user.service';
import { UserRepository } from 'src/user/repository/user.repository';
import { PrismaUserRepository } from 'src/user/repository/implementation/prismaUser.repository';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/auth/auth.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [PublicationController],
  providers: [
    PublicationService,
    AuthController,
    AuthService,
    UserService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class PublicationModule {}
