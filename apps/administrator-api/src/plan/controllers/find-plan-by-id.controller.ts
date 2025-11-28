import { Controller, Get, HttpCode, HttpStatus, Param, UseGuards } from "@nestjs/common";
import { FindPlanByIdService } from "../services/find-plan-by-id.service";
import { FindPlanByIdOutputDTO } from "../dto/io/find-plan-by-id-output.dto";
import { FindPlanByIdRouteParamsDTO } from "../dto/route-params/find-plan-by-id-route-params.dto";
import { JwtAuthGuard } from "apps/auth-api/src/auth/jwtStrategy/jwt-auth.guard";
import { AdminGuard } from "apps/auth-api/src/auth/guards/admin.guard";

@Controller()
export class FindPlanByIdController{
  constructor(
    private readonly findPlanByIdService: FindPlanByIdService,
  ){}

  @UseGuards(JwtAuthGuard, AdminGuard)
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  public async handle(
    @Param()
    params : FindPlanByIdRouteParamsDTO 
  ): Promise<FindPlanByIdOutputDTO>{
    const result = await this.findPlanByIdService.execute(params);

    return result;
  }
}
