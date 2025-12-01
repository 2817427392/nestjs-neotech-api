import { Body, Controller, HttpCode, HttpStatus, Param, Patch, UseGuards } from "@nestjs/common";
import { UpdateAdministratorService } from "../services/update-administrator.service";
import { UpdateAdministratorRequestDTO } from "../dto/request/update-administrator-request.dto";
import { UpdateAdministratorRouteParamsDTO } from "../dto/route-params/update-administrator-route-params.dto";
import { JwtAuthGuard } from "apps/auth-api/src/auth/jwtStrategy/jwt-auth.guard";
import { AdminGuard } from "apps/auth-api/src/auth/guards/admin.guard";

@Controller()
export class UpdateAdministratorController{
  constructor(
    private readonly updateAdministratorService: UpdateAdministratorService,
  ){}

  @UseGuards(JwtAuthGuard, AdminGuard)
  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  public async handle(
    @Body()
    input: UpdateAdministratorRequestDTO,
    @Param()
    params: UpdateAdministratorRouteParamsDTO,
  ){
    const result = await this.updateAdministratorService.execute({
      ...input, 
      ...params,
    });

    return result;
  } 
}
