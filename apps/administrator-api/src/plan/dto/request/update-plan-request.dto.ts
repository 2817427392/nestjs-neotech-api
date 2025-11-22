import { Transform, Type } from "class-transformer";
import { IsBoolean, IsInt, IsNumber, IsOptional, IsString, MaxLength, Min, MinLength } from "class-validator";

export class UpdatePlanRequestDTO{
  @IsString()
  @IsOptional()
  @MaxLength(40)
  @MinLength(3)
  @Transform(({ value }) => value?.trim().toLowerCase())
  public name?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  public annualPrice?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  @Type(() => Number)
  public monthlyPrice?: number;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (typeof value === "boolean") return value;
    return String(value).trim().toLowerCase() === "true";
  })  
  public hasPdfReports?: boolean;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (typeof value === "boolean") return value;
    return String(value).trim().toLowerCase() === "true";
  })  
  public hasExcelReports?: boolean;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (typeof value === "boolean") return value;
    return String(value).trim().toLowerCase() === "true";
  })  
  public hasCsvReports?: boolean;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (typeof value === "boolean") return value;
    return String(value).trim().toLowerCase() === "true";
  })  
  public hasStockRedirection?: boolean;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (typeof value === "boolean") return value;
    return String(value).trim().toLowerCase() === "true";
  })  
  public hasPrioritySuport?: boolean;

  @IsInt()
  @IsOptional()
  @Min(0)
  @Type(() => Number)
  public totalUsers?: number;
}
