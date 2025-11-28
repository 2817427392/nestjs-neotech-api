import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class FindAdministratorByEmailInputDTO{
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(320)
  @Transform(({ value }) => value.trim().toLowerCase())
  public email: string;
}
