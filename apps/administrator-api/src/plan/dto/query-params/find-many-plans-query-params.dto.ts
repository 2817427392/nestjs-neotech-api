import { Transform, Type } from "class-transformer";
import { IsBoolean, IsInt, IsOptional, IsString, Max, Min } from "class-validator";

export class FindManyPlansQueryParamsDTO{
  @IsInt()
  @Min(0)
  @IsOptional()
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
  @IsInt()
  @Min(0)
  @Type(() => Number)
  minMonthlyPrice?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  maxMonthlyPrice?: number;
  
  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  minAnnualPrice?: number;
  
  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  maxAnnualPrice?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  minTotalUsers?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  maxTotalUsers?: number;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value?.trim().toLowerCase() === 'true')
  hasPdfReports?: boolean;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value?.trim().toLowerCase() === 'true')
  hasExcelReports?: boolean;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value?.trim().toLowerCase() === 'true')
  hasCsvReports?: boolean;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value?.trim().toLowerCase() === 'true')
  hasStockRedirection?: boolean;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value?.trim().toLowerCase() === 'true')
  hasPrioritySuport?: boolean;
}
