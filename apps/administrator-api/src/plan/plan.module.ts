import { Module } from "@nestjs/common";
import { CreatePlanController } from "./controllers/create-plan.controller";
import { CreatePlanService } from "./services/create-plan.service";
import { DatabaseModule } from "shared/database/database.module";
import { FindPlanByIdController } from "./controllers/find-plan-by-id.controller";
import { FindPlanByIdService } from "./services/find-plan-by-id.service";

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [
    CreatePlanController,
    FindPlanByIdController,
  ],
  providers: [
    CreatePlanService,
    FindPlanByIdService,
  ],
})
export class PlanModule{}
