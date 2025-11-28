import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class FindAdministratorByIdRouteParamsDTO{
  @IsUUID()
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim())
  public id: string;
}
