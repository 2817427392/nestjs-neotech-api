import { Transform } from "class-transformer";
import { IsOptional, IsString, Length, MaxLength, MinLength } from "class-validator";

export class UpdateAdministratorRequestDTO{
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim().replace(/[^\d]/g, ''))
  @Length(11, 11, { message: "CPF deve ter 11 números" })
  cpf: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(256)
  @Transform(({ value }) => value.trim().toLowerCase())
  name: string;

}
