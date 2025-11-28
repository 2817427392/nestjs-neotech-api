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

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateAdministratorController,
    DeleteAdministratorController,
    FindAdministratorByIdController,
    FindAdministratorByCpfController,
  ],
  providers: [
    CreateAdministratorService,
    DeleteAdministratorService,
    FindAdministratorByIdService,
    FindAdministratorByCpfService,
    FindAdministratorByEmailService,
  ],
  exports: [
    FindAdministratorByEmailService,
  ]
})
export class AdministratorModule{}
