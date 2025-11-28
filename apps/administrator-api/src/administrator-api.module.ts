import { Module } from '@nestjs/common';
import { PlanModule } from './plan/plan.module';
import { DatabaseModule } from 'shared/database/database.module';
import { RouterModule } from '@nestjs/core';
import { AdministratorModule } from './administrator/administrator.module';
import { AuthModule } from 'apps/auth-api/src/auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    PlanModule,
    AdministratorModule,
    AuthModule,

    RouterModule.register([
      {
        path: 'plan',
        module: PlanModule,
      },
      {
        path: 'administrator',
        module: AdministratorModule,
      }
    ])
  ],
})
export class AdministratorApiModule {}
