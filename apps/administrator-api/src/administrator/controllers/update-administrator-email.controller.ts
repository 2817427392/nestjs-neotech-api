import { Body, Controller, HttpCode, HttpStatus, Patch, Query, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "apps/auth-api/src/auth/jwtStrategy/jwt-auth.guard";
import { AdminGuard } from "apps/auth-api/src/auth/guards/admin.guard";
import { CurrentUser } from "apps/auth-api/src/auth/decorators/current-user.decorator";
import type { AuthenticatedUser } from "apps/auth-api/src/auth/interfaces/authenticated-user.interface";
import { UpdateAdministratorEmailService } from "../services/update-administrator-email.service";
import { UpdateAdministratorEmailRequestDTO } from "../dto/request/update-administrator-email-request.dto";

@Controller()
export class UpdateAdministratorEmailController{
  constructor(
    private readonly updateAdministratorEmailService: UpdateAdministratorEmailService,
  ){}

  @UseGuards(JwtAuthGuard, AdminGuard)
  @HttpCode(HttpStatus.OK)
  @Patch('/email')
  public async handle(
    @Body()
    { email }: UpdateAdministratorEmailRequestDTO, 
    @CurrentUser()
    user: AuthenticatedUser,
  ){
    const result = await this.updateAdministratorEmailService.execute({ id: user.id, email});

    return result;
  }
}
