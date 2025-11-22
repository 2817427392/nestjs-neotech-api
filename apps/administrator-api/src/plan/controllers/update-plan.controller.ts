import { Body, Controller, HttpCode, HttpStatus, Param, Put } from "@nestjs/common";
import { UpdatePlanRouteParamsDTO } from "../dto/route-params/update-plan-route-params.dto";
import { UpdatePlanRequestDTO } from "../dto/request/update-plan-request.dto";
import { UpdatePlanService } from "../services/update-plan.service";

@Controller()
export class UpdatePlanController{
  constructor(
    private readonly updatePlanService: UpdatePlanService,
  ){}

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  public async handle(
    @Param()
    { id }: UpdatePlanRouteParamsDTO,
    @Body()
    input: UpdatePlanRequestDTO,
  ){
    const result = this.updatePlanService.execute({
      id,
      ...input,
    });

    return result;
  }
}
