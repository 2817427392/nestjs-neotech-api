import { Module } from '@nestjs/common';
import { PlanModule } from './plan/plan.module';
import { DatabaseModule } from 'shared/database/database.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    DatabaseModule,
    PlanModule,
    RouterModule.register([
      {
        path: 'plan',
        module: PlanModule,
      }
    ])
  ],
})
export class AdministratorApiModule {}
