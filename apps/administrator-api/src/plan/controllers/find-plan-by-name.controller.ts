import { Controller, Get, HttpCode, HttpStatus, Query } from "@nestjs/common";
import { FindPlanByNameService } from "../services/find-plan-by-name.service";
import { FindPlanByNameQueryParamsDTO } from "../dto/query-params/find-plan-by-name-query-params.dto";
import { FindPlanByNameOutputDTO } from "../dto/io/find-plan-by-name-output.dto";

@Controller()
export class FindPlanByNameController{
  constructor(
    private readonly findPlanByNameService: FindPlanByNameService,
  ){}

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
