import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePostDTO {
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsDate()
  dateToPublish: Date;

  @IsBoolean()
  published: boolean

  @IsString()
  @IsNotEmpty()
  socialMedia: string;

  @IsNumber()
  userId: number
}
