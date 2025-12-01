import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, Matches, MaxLength, MinLength } from "class-validator";

export class CreateAdministratorInput{
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim().replace(/[^\d]/g, ''))
  @Length(11, 11, { message: "CPF deve ter 11 números" })
  public cpf: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(256)
  @Transform(({ value }) => value.trim().toLowerCase())
  public name: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(320)
  @Transform(({ value }) => value.trim().toLowerCase())
  public email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/,
    { message: "A senha deve ter mínimo 8 caracteres, contendo maiúscula, minúscula, número e símbolo." }
  )
  public password: string;
}
