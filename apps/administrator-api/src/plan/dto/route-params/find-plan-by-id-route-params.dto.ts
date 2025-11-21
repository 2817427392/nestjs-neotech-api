import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class FindPlanByIdRouteParamsDTO{
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  public id: string;
}
