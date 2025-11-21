import { Type } from "class-transformer";
import { IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePlanInputDTO{
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  @MinLength(3)
  public name: string;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  public annualPrice: number;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  public monthlyPrice: number;

  @IsOptional()
  @IsBoolean()
  public hasPdfReports?: boolean = false;

  @IsOptional()
  @IsBoolean()
  public hasExcelReports?: boolean = false;

  @IsOptional()
  @IsBoolean()
  public hasCsvReports?: boolean = false;

  @IsOptional()
  @IsBoolean()
  public hasStockRediretion?: boolean = false;

  @IsOptional()
  @IsBoolean()
  public hasPrioritySuport?: boolean = false;

  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  public totalUsers: number;
}
