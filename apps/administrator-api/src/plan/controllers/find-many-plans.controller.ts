import { Controller, Get, HttpCode, HttpStatus, Query, UseGuards } from "@nestjs/common";
import { FindManyPlansOutputDTO } from "../dto/io/find-many-plans-output.dto";
import { FindManyPlansService } from "../services/find-many-plans.service";
import { FindManyPlansQueryParamsDTO } from "../dto/query-params/find-many-plans-query-params.dto";
import { JwtAuthGuard } from "apps/auth-api/src/auth/jwtStrategy/jwt-auth.guard";
import { AdminGuard } from "apps/auth-api/src/auth/guards/admin.guard";

@Controller()
export class FindManyPlansController{
  constructor(
    private readonly findManyPlansService: FindManyPlansService,
  ){}

  @UseGuards(JwtAuthGuard, AdminGuard)
  @HttpCode(HttpStatus.OK)
  @Get()
  public async handle(
    @Query()
    query: FindManyPlansQueryParamsDTO 
  ): Promise<FindManyPlansOutputDTO []>{
    const result = await this.findManyPlansService.execute(query);

    return result;
  }
}
