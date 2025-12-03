import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class AuthenticateUserInput{
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(320)
  @Transform(({ value }) => value?.trim().toLowerCase())
  public email: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim())
  public password: string;
}
