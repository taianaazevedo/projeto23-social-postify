import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthRegisterDTO } from "./dto/auth-register.dto";
import { UserService } from "./../user/user.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {

  private EXPIRATION_TIME = "7 days";
  private ISSUER = "Driven";
  private AUDIENCE = "users";

  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
    private userService: UserService
  ) { }

  async createToken(user: User) {
    const token = this.jwtService.sign({
      name: user.name,
      email: user.email
    }, {
      expiresIn: this.EXPIRATION_TIME,
      subject: String(user.id),
      issuer: this.ISSUER,
      audience: this.AUDIENCE
    });

    return {
      accessToken: token
    }
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email
      }
    });

    if (!user) {
      throw new UnauthorizedException(`Email or password not valid.`);
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new UnauthorizedException(`Email or password not valid.`);

    return this.createToken(user);
  }

  async register(data: AuthRegisterDTO) {
    const user = await this.userService.addUser(data);
    return this.createToken(user);
  }
}
