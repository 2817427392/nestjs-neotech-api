import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class UpdateAdministratorRouteParamsDTO{
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
