import { Controller, Get, HttpCode, HttpStatus, Param } from "@nestjs/common";
import { FindPlanByIdService } from "../services/find-plan-by-id.service";
import { FindPlanByIdOutputDTO } from "../dto/io/find-plan-by-id-output.dto";
import { FindPlanByIdRouteParamsDTO } from "../dto/route-params/find-plan-by-id-route-params.dto";

@Controller()
export class FindPlanByIdController{
  constructor(
    private readonly findPlanByIdService: FindPlanByIdService,
  ){}

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
