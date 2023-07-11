import { Body, Controller, Post, Get, UseGuards } from "@nestjs/common";
import { AuthSignInDTO } from "./dto/auth-login.dto";
import { AuthRegisterDTO } from "./dto/auth-register.dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {

  constructor(private readonly authService: AuthService) { }

  @Post("login")
  async login(@Body() body: AuthSignInDTO) {
    const { email, password } = body;
    return this.authService.login(email, password);
  }

  @Post("register")
  async register(@Body() body: AuthRegisterDTO) {
    return this.authService.register(body);
  }

}
