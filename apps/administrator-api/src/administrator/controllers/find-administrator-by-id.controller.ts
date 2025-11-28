import { Controller, Get, HttpCode, HttpStatus, Param, UseGuards } from "@nestjs/common";
import { FindAdministratorByIdRouteParamsDTO } from "../dto/route-params/find-administrator-by-id-route-params.dto";
import { FindAdministratorByIdService } from "../services/find-administrator-by-id.service";
import { JwtAuthGuard } from "apps/auth-api/src/auth/jwtStrategy/jwt-auth.guard";
import { AdminGuard } from "apps/auth-api/src/auth/guards/admin.guard";

@Controller()
export class FindAdministratorByIdController{
  constructor(
    private readonly findAdministratorByIdService: FindAdministratorByIdService,
  ){}

  @UseGuards(JwtAuthGuard, AdminGuard)
  @HttpCode(HttpStatus.OK)
  @Get('/id/:id')
  public async handle(
    @Param()
    params: FindAdministratorByIdRouteParamsDTO,
  ){
    const result = await this.findAdministratorByIdService.execute(params);

    return result;
  }
}
