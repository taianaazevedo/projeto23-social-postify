import {
    Body,
    Controller,
    Get,
    HttpCode,
    Post,
    UseGuards,
  } from '@nestjs/common';
  import { AuthSignInDTO } from './dto/auth-login.dto';
  import { AuthService } from './auth.service';
  import { AuthRegisterDTO } from './dto/auth-register.dto';
  import { User } from '@prisma/client';
  import { AuthGuard } from './authGuard/auth.guard';
  import { UserRequest } from './decorators/user-decorator';
  
  @Controller('auth')
  export class AuthController {
    constructor(private readonly authService: AuthService) {}
  
    @HttpCode(200)
    @Post('signin')
    async signin(@Body() body: AuthSignInDTO) {
      return this.authService.signin(body);
    }
  
    @Post('signup')
    async signup(@Body() body: AuthRegisterDTO) {
      return this.authService.signup(body);
    }
  
    @UseGuards(AuthGuard)
    @Get('me')
    async userLogged(@UserRequest() user: User) {
      return user;
    }
  }
