import { ConflictException, Injectable } from "@nestjs/common";
import { PrismaService } from "shared/database/services/prisma.service";
import { UpdatePlanInputDTO } from "../dto/io/update-plan-input.dto";
import { FindPlanByIdService } from "./find-plan-by-id.service";

@Injectable()
export class UpdatePlanService{
  constructor(
    private readonly prismaService: PrismaService,
    private readonly findPlanByIdService: FindPlanByIdService,
  ){}

  public async execute(
    input: UpdatePlanInputDTO
  ){
    const plan = await this.findPlanByIdService.execute({ id: input.id });
   
    if (input.name && plan.name !== input.name){
      const planWithSameName = await this.prismaService.plan.findFirst({
        where: {
          name: input.name,
          NOT: { id: plan.id }
        },
        select: {
          id: true,
        },
      });

      if (planWithSameName) throw new ConflictException('Nome já está sendo usado');
    }

    const data = {
      name: input.name ?? plan.name,
      monthlyPrice: input.monthlyPrice ?? plan.monthlyPrice,
      annualPrice: input.annualPrice ?? plan.annualPrice,
      totalUsers: input.totalUsers ?? plan.totalUsers,
      hasPdfReports: input.hasPdfReports ?? plan.hasPdfReports,
      hasCsvReports: input.hasCsvReports ?? plan.hasCsvReports,
      hasExcelReports: input.hasExcelReports ?? plan.hasExcelReports,
      hasPrioritySuport: input.hasPrioritySuport ?? plan.hasPrioritySuport,
      hasStockRedirection: input.hasStockRediretion ?? plan.hasStockRedirection,
    };

    const planUpdated = await this.prismaService.plan.update({
      where: {
        id: input.id,
      },
      data,
      select: {
        id: true,
        name: true,
        annualPrice: true,
        monthlyPrice: true,
        totalUsers: true,
        hasPdfReports: true,
        hasCsvReports: true,
        hasExcelReports: true,
        hasPrioritySuport: true,
        hasStockRedirection: true,
      }
    });

    return {
      ...planUpdated,
      annualPrice: Number(planUpdated.annualPrice),
      monthlyPrice: Number(planUpdated.monthlyPrice),
    }
  }
}
