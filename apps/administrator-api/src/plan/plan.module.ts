import { Module } from "@nestjs/common";
import { CreatePlanController } from "./controllers/create-plan.controller";
import { CreatePlanService } from "./services/create-plan.service";
import { DatabaseModule } from "shared/database/database.module";
import { FindPlanByIdController } from "./controllers/find-plan-by-id.controller";
import { FindPlanByIdService } from "./services/find-plan-by-id.service";
import { FindPlanByNameService } from "./services/find-plan-by-name.service";
import { FindPlanByNameController } from "./controllers/find-plan-by-name.controller";
import { DeletePlanController } from "./controllers/delete-plan.controller";
import { DeletePlanService } from "./services/delete-plan.service";
import { FindManyPlansController } from "./controllers/find-many-plans.controller";
import { FindManyPlansService } from "./services/find-many-plans.service";
import { UpdatePlanController } from "./controllers/update-plan.controller";
import { UpdatePlanService } from "./services/update-plan.service";

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [
    CreatePlanController,
    DeletePlanController,
    FindManyPlansController,
    FindPlanByIdController,
    FindPlanByNameController,
    UpdatePlanController,
  ],
  providers: [
    CreatePlanService,
    DeletePlanService,
    FindManyPlansService,
    FindPlanByIdService,
    FindPlanByNameService,
    UpdatePlanService,
  ],
})
export class PlanModule{}
