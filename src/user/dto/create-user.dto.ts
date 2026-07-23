import { IsNumber, IsString, IsEmail, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNumber()
  id!: number;

  @IsString()
  @MinLength(3)
  name!: string;
  
  @IsEmail()
  email!: string;
}   