import { CurrentUser } from "apps/auth-api/src/auth/decorators/current-user.decorator";
import { AdministratorOutputDTO } from "../dto/io/administrator-output.dto";
import { UpdateAdministratorPasswordService } from "../services/update-administrator-password.service";
import type { AuthenticatedUser } from "apps/auth-api/src/auth/interfaces/authenticated-user.interface";
import { Body, Controller, HttpCode, HttpStatus, Patch, UseGuards } from "@nestjs/common";
import { UpdateAdministratorPasswordRequestDTO } from "../dto/request/update-administrator-password-request.dto";
import { JwtAuthGuard } from "apps/auth-api/src/auth/jwtStrategy/jwt-auth.guard";
import { AdminGuard } from "apps/auth-api/src/auth/guards/admin.guard";

@Controller()
export class UpdateAdministratorPasswordController{
  constructor(
    private readonly updateAdministratorPasswordService: UpdateAdministratorPasswordService,
  ){}

  @UseGuards(JwtAuthGuard, AdminGuard)
  @HttpCode(HttpStatus.OK)
  @Patch('/email')
  public async handle(
    @Body()
    { password }: UpdateAdministratorPasswordRequestDTO, 
    @CurrentUser()
    { id }: AuthenticatedUser,
  ): Promise<AdministratorOutputDTO>{
    const result = await this.updateAdministratorPasswordService.execute({ password, id });

    return result;
  }
}
