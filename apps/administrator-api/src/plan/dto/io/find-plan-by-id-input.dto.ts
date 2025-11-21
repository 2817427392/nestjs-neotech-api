import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class FindPlanByIdInputDTO{
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  public id: string;
}
