import { Controller, Delete, HttpCode, HttpStatus, Param, UseGuards } from "@nestjs/common";
import { DeleteAdministratorService } from "../services/delete-administrator.service";
import { DeleteAdministratorRouteParamsDTO } from "../dto/route-params/delete-administrator-route-params.dto";
import { AdministratorOutputDTO } from "../dto/io/administrator-output.dto";
import { JwtAuthGuard } from "apps/auth-api/src/auth/jwtStrategy/jwt-auth.guard";
import { AdminGuard } from "apps/auth-api/src/auth/guards/admin.guard";
import { CurrentUser } from "apps/auth-api/src/auth/decorators/current-user.decorator";
import type { AuthenticatedUser } from "apps/auth-api/src/auth/interfaces/authenticated-user.interface";

@Controller()
export class DeleteAdministratorController{
  constructor(
    private readonly deleteAdministratorService: DeleteAdministratorService,
  ){}

  @UseGuards(JwtAuthGuard, AdminGuard)
  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  public async handle(
    @Param()
    params: DeleteAdministratorRouteParamsDTO,
    @CurrentUser()
    user: AuthenticatedUser
  ): Promise<AdministratorOutputDTO>{
    const result = await this.deleteAdministratorService.execute(params, user);

    return result;
  }
}
