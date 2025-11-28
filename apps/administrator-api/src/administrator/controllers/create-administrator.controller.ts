import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { CreateAdministratorService } from "../services/create-administrator.service";
import { CreateAdministratorRequest } from "../dto/request/create-administrator-request.dto";
import { AdministratorOutputDTO } from "../dto/io/administrator-output.dto";
import { JwtAuthGuard } from "apps/auth-api/src/auth/jwtStrategy/jwt-auth.guard";
import { AdminGuard } from "apps/auth-api/src/auth/guards/admin.guard";

@Controller()
export class CreateAdministratorController{
  constructor(
    private readonly createAdministratorService: CreateAdministratorService,
  ){}

  @UseGuards(JwtAuthGuard, AdminGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post()
  public async handle(
    @Body()
    input: CreateAdministratorRequest,
  ): Promise<AdministratorOutputDTO>{
    const result = await this.createAdministratorService.execute(input);
    
    return result;
  }
}
