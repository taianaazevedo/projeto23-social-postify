import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PublicationModule } from './publication/publication.module';

@Module({
  imports: [UserModule, PublicationModule]
})
export class AppModule {}
