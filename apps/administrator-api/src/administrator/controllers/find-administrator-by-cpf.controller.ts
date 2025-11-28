import { Controller, Get, HttpCode, HttpStatus, Param, Query, UseGuards } from "@nestjs/common";
import { AdministratorOutputDTO } from "../dto/io/administrator-output.dto";
import { FindAdministratorByCpfRouteParamsDTO } from "../dto/route-params/find-administrator-by-cpf-route-params.dto";
import { FindAdministratorByCpfService } from "../services/find-administrator-by-cpf.service";
import { JwtAuthGuard } from "apps/auth-api/src/auth/jwtStrategy/jwt-auth.guard";
import { AdminGuard } from "apps/auth-api/src/auth/guards/admin.guard";

@Controller()
export class FindAdministratorByCpfController{
  constructor(
    private readonly findAdministratorByCpfService: FindAdministratorByCpfService,
  ){}

  @UseGuards(JwtAuthGuard, AdminGuard)
  @HttpCode(HttpStatus.OK)
  @Get('/cpf/:cpf')
  public async handle(
    @Param()
    params: FindAdministratorByCpfRouteParamsDTO,
  ): Promise<AdministratorOutputDTO>{
    const result = await this.findAdministratorByCpfService.execute(params);

    return result;
  }
}
