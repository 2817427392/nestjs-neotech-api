import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class FindPlanByNameInputDTO{
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  @MinLength(3)
  @Transform(({ value }) => value?.trim().toLowerCase())
  public name: string;
}
