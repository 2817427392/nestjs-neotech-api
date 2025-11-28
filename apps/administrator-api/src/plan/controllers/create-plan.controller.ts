import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { CreatePlanService } from "../services/create-plan.service";
import { CreatePlanRequestDTO } from "../dto/request/create-plan-request.dto";
import { CreatePlanOutputDTO } from "../dto/io/create-plan-output.dto";
import { JwtAuthGuard } from "apps/auth-api/src/auth/jwtStrategy/jwt-auth.guard";
import { AdminGuard } from "apps/auth-api/src/auth/guards/admin.guard";

@Controller()
export class CreatePlanController{
  constructor(
    private readonly createPlanService: CreatePlanService,
  ){}

  @UseGuards(JwtAuthGuard, AdminGuard)
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
