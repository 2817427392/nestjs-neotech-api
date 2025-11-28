import { Controller, Get, HttpCode, HttpStatus, Query, UseGuards } from "@nestjs/common";
import { FindPlanByNameService } from "../services/find-plan-by-name.service";
import { FindPlanByNameQueryParamsDTO } from "../dto/query-params/find-plan-by-name-query-params.dto";
import { FindPlanByNameOutputDTO } from "../dto/io/find-plan-by-name-output.dto";
import { JwtAuthGuard } from "apps/auth-api/src/auth/jwtStrategy/jwt-auth.guard";
import { AdminGuard } from "apps/auth-api/src/auth/guards/admin.guard";

@Controller()
export class FindPlanByNameController{
  constructor(
    private readonly findPlanByNameService: FindPlanByNameService,
  ){}

  @UseGuards(JwtAuthGuard, AdminGuard)
  @HttpCode(HttpStatus.OK)
  @Get()
  public async handle(
    @Query()
    query : FindPlanByNameQueryParamsDTO
  ): Promise<FindPlanByNameOutputDTO>{
    const result = await this.findPlanByNameService.execute(query);

    return result;
  }
}
