import type { AuthenticatedUser } from "apps/auth-api/src/auth/interfaces/authenticated-user.interface";
import { Exclude, Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateAdministratorEmailInputDTO{
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @MinLength(5)
  @MaxLength(320)
  @Transform(({ value }) => value.trim().toLowerCase())
  public email: string;

  @Exclude()
  public user: AuthenticatedUser;
}
