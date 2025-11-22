import { Controller, Get, HttpCode, HttpStatus, Query } from "@nestjs/common";
import { FindManyPlansOutputDTO } from "../dto/io/find-many-plans-output.dto";
import { FindManyPlansService } from "../services/find-many-plans.service";
import { FindManyPlansQueryParamsDTO } from "../dto/query-params/find-many-plans-query-params.dto";

@Controller()
export class FindManyPlansController{
  constructor(
    private readonly findManyPlansService: FindManyPlansService,
  ){}

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
