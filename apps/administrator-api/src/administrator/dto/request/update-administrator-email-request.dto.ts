import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateAdministratorEmailRequestDTO{
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @MinLength(5)
  @MaxLength(320)
  @Transform(({ value }) => value.trim().toLowerCase())
  email: string;
}
