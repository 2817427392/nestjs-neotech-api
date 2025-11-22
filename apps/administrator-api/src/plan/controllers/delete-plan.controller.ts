import { Controller, Delete, HttpCode, HttpStatus, Param } from "@nestjs/common";
import { DeletePlanRouteParamsDTO } from "../dto/route-params/delete-plan-route-params.dto";
import { DeletePlanService } from "../services/delete-plan.service";
import { DeletePlanOutputDTO } from "../dto/io/delete-plan-output.dto";

@Controller()
export class DeletePlanController{
  constructor(
    private readonly deletePlanService: DeletePlanService
  ){}

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
