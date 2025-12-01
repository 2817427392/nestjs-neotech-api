import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, IsUUID, MaxLength, MinLength } from "class-validator";

export class UpdateAdministratorEmailInputDTO{
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @MinLength(5)
  @MaxLength(320)
  @Transform(({ value }) => value.trim().toLoweCase())
  email: string;
}
