import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PublicationModule } from './publication/publication.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, PublicationModule, AuthModule]
})
export class AppModule {}
