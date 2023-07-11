import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthSignInDTO {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}