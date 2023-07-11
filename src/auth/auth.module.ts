import { Module } from "@nestjs/common"
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from './auth.controller';
import { AuthService } from "./auth.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserModule } from "src/user/user.module";

@Module({
  imports: [JwtModule.register({
    secret: process.env.JWT_SECRET
  }), PrismaModule, UserModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {

}
