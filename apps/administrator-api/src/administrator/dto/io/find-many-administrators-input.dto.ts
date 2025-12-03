import { Transform, Type } from "class-transformer";
import { IsEmail, IsInt, IsOptional, IsString, Max, Min } from "class-validator";

export class FindManyAdministratorsInputDTO{
  @IsInt()
  @Min(0)
  @IsOptional()
  @Type(() => Number)
  public skip?: number = 0;

  @IsInt()
  @IsOptional()
  @Min(0)
  @Max(20)
  @Type(() => Number)
  public take?: number = 20;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.trim().toLowerCase())
  public name?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.trim().replace(/[^\d]/g, ''))
  @Max(11)
  public cpf?: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  @Transform(({ value }) => value?.trim().toLowerCase())
  public email?: string; 
}
