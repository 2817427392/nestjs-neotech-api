import { Controller, Get, HttpCode, HttpStatus, Query, UseGuards } from "@nestjs/common";
import { FindManyAdministratorsService } from "../services/find-many-administrators.service";
import { FindManyAdministratorsQueryParamsDTO } from "../dto/query-params/find-many-administrators-query-params.dto";
import { AdministratorOutputDTO } from "../dto/io/administrator-output.dto";
import { JwtAuthGuard } from "apps/auth-api/src/auth/jwtStrategy/jwt-auth.guard";
import { AdminGuard } from "apps/auth-api/src/auth/guards/admin.guard";

@Controller()
export class FindManyAdministratorsController{
  constructor(
    private readonly findManyAdministratorsService: FindManyAdministratorsService,
  ){}

  @Get()
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard, AdminGuard)
  public async handle(
    @Query()
    query: FindManyAdministratorsQueryParamsDTO,
  ): Promise<AdministratorOutputDTO []>{
    const result = await this.findManyAdministratorsService.execute(query);

    return result;
  }
}
