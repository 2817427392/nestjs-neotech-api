import { Transform } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString, IsUUID, Length, MaxLength, MinLength } from "class-validator";

export class UpdateAdministratorInputDTO{
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  public id: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value?.trim().replace(/[^\d]/g, ''))
  @Length(11, 11, { message: "CPF deve ter 11 números" })
  public cpf: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(256)
  @Transform(({ value }) => value.trim().toLowerCase())
  public name: string;
}
