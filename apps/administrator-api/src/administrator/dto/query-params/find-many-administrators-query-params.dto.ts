import { Transform, Type } from "class-transformer";
import { IsEmail, IsInt, IsOptional, IsString, Max, Min } from "class-validator";

export class FindManyAdministratorsQueryParamsDTO{
  @IsInt()
  @Min(0)
  @IsOptional()
  @Type(() => Number)
  skip?: number = 0;

  @IsInt()
  @IsOptional()
  @Min(0)
  @Max(20)
  @Type(() => Number)
  take?: number = 20;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.trim().toLowerCase())
  name?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.trim().replace(/[^\d]/g, ''))
  @Max(11)
  cpf?: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  @Transform(({ value }) => value?.trim().toLowerCase())
  email?: string; 
}
