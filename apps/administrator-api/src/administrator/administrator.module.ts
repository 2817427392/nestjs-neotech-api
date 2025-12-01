import { Module } from "@nestjs/common";
import { CreateAdministratorController } from "./controllers/create-administrator.controller";
import { CreateAdministratorService } from "./services/create-administrator.service";
import { DatabaseModule } from "shared/database/database.module";
import { FindAdministratorByIdController } from "./controllers/find-administrator-by-id.controller";
import { FindAdministratorByIdService } from "./services/find-administrator-by-id.service";
import { DeleteAdministratorController } from "./controllers/delete-administrator.controller";
import { DeleteAdministratorService } from "./services/delete-administrator.service";
import { FindAdministratorByCpfController } from "./controllers/find-administrator-by-cpf.controller";
import { FindAdministratorByCpfService } from "./services/find-administrator-by-cpf.service";
import { FindAdministratorByEmailService } from "./services/find-administrator-by-email.service";
import { UpdateAdministratorEmailController } from "./controllers/update-administrator-email.controller";
import { UpdateAdministratorEmailService } from "./services/update-administrator-email.service";
import { UpdateAdministratorService } from "./services/update-administrator.service";
import { UpdateAdministratorController } from "./controllers/update-administrador.controller";
import { UpdateAdministratorPasswordService } from "./services/update-administrator-password.service";
import { UpdateAdministratorPasswordController } from "./controllers/update-administrator-password.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateAdministratorController,
    DeleteAdministratorController,
    FindAdministratorByIdController,
    FindAdministratorByCpfController,
    UpdateAdministratorController,
    UpdateAdministratorEmailController,
    UpdateAdministratorPasswordController,
  ],
  providers: [
    CreateAdministratorService,
    DeleteAdministratorService,
    FindAdministratorByIdService,
    FindAdministratorByCpfService,
    FindAdministratorByEmailService,
    UpdateAdministratorService,
    UpdateAdministratorEmailService,
    UpdateAdministratorPasswordService,
  ],
  exports: [
    FindAdministratorByEmailService,
  ]
})
export class AdministratorModule{}
