import { Transform, Type } from "class-transformer";
import { IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreatePlanInputDTO{
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  @MinLength(3)
  @Transform(({ value }) => value?.trim().toLowerCase())
  public name: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Type(() => Number)
  public annualPrice: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Type(() => Number)
  public monthlyPrice: number;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (typeof value === "boolean") return value;
    return String(value).trim().toLowerCase() === "true";
  })  
  public hasPdfReports?: boolean = false;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (typeof value === "boolean") return value;
    return String(value).trim().toLowerCase() === "true";
  })    
  public hasExcelReports?: boolean = false;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (typeof value === "boolean") return value;
    return String(value).trim().toLowerCase() === "true";
  })    
  public hasCsvReports?: boolean = false;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (typeof value === "boolean") return value;
    return String(value).trim().toLowerCase() === "true";
  })    
  public hasStockRedirection?: boolean = false;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (typeof value === "boolean") return value;
    return String(value).trim().toLowerCase() === "true";
  })    
  public hasPrioritySuport?: boolean = false;

  @IsInt()
  @IsNotEmpty()
  @Min(0)
  @Type(() => Number)
  public totalUsers: number;
}
