import { Controller, Delete, HttpCode, HttpStatus, Param, UseGuards } from "@nestjs/common";
import { DeletePlanRouteParamsDTO } from "../dto/route-params/delete-plan-route-params.dto";
import { DeletePlanService } from "../services/delete-plan.service";
import { DeletePlanOutputDTO } from "../dto/io/delete-plan-output.dto";
import { JwtAuthGuard } from "apps/auth-api/src/auth/jwtStrategy/jwt-auth.guard";
import { AdminGuard } from "apps/auth-api/src/auth/guards/admin.guard";

@Controller()
export class DeletePlanController{
  constructor(
    private readonly deletePlanService: DeletePlanService
  ){}

  @UseGuards(JwtAuthGuard, AdminGuard)
  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  public async handle(
    @Param()
    params: DeletePlanRouteParamsDTO 
  ): Promise<DeletePlanOutputDTO>{
    const result = await this.deletePlanService.execute(params);

    return result;
  }
}
