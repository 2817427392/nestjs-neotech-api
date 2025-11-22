import { Transform, Type } from "class-transformer";
import { IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, MaxLength, Min, MinLength } from "class-validator";

export class UpdatePlanInputDTO{
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim())
  public id: string;

  @IsString()
  @IsOptional()
  @MaxLength(40)
  @MinLength(3)
  @Transform(({ value }) => value?.trim().toLowerCase())
  public name?: string;

  @IsNumber()
  @IsOptional()
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
  public hasStockRediretion?: boolean = false;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => {
    if (typeof value === "boolean") return value;
    return String(value).trim().toLowerCase() === "true";
  })  
  public hasPrioritySuport?: boolean = false;

  @IsInt()
  @IsOptional()
  @Min(0)
  @Type(() => Number)
  public totalUsers?: number;
}
