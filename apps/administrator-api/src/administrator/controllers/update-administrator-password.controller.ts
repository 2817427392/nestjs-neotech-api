import { CurrentUser } from "apps/auth-api/src/auth/decorators/current-user.decorator";
import { AdministratorOutputDTO } from "../dto/io/administrator-output.dto";
import { UpdateAdministratorPasswordService } from "../services/update-administrator-password.service";
import type { AuthenticatedUser } from "apps/auth-api/src/auth/interfaces/authenticated-user.interface";
import { Body, Controller, Get, HttpCode, HttpStatus, Patch, UseGuards } from "@nestjs/common";
import { UpdateAdministratorPasswordRequestDTO } from "../dto/request/update-administrator-password-request.dto";
import { JwtAuthGuard } from "apps/auth-api/src/auth/jwtStrategy/jwt-auth.guard";
import { AdminGuard } from "apps/auth-api/src/auth/guards/admin.guard";

@Controller("/password")
export class UpdateAdministratorPasswordController{
  constructor(
  ){}

  @UseGuards(JwtAuthGuard, AdminGuard)
  @HttpCode(HttpStatus.OK)
  @Patch()
  public async handle(
    @Body()
    { password }: UpdateAdministratorPasswordRequestDTO, 
    @CurrentUser()
    user: AuthenticatedUser,
  ): Promise<any>{
    console.log("teste")
  }
}
