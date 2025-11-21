import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreatePlanService } from "../services/create-plan.service";
import { CreatePlanRequestDTO } from "../dto/request/create-plan-request.dto";
import { CreatePlanOutputDTO } from "../dto/io/create-plan-output.dto";

@Controller()
export class CreatePlanController{
  constructor(
    private readonly createPlanService: CreatePlanService,
  ){}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  public async handle(
    @Body()
    input: CreatePlanRequestDTO
  ): Promise<CreatePlanOutputDTO>{
    const result = await this.createPlanService.execute(input);

    return result;
  }
}
