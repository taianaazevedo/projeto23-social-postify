import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, MaxLength} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsStrongPassword({
    minLength: 6,
  })
  @IsNotEmpty()
  @MaxLength(20)
  password: string;

  @IsString()
  @IsNotEmpty()
  avatar: string;
}

