import { ConflictException, Injectable } from "@nestjs/common";
import { CreatePlanInputDTO } from "../dto/io/create-plan-input.dto";
import { CreatePlanOutputDTO } from "../dto/io/create-plan-output.dto";
import { PrismaService } from "shared/database/services/prisma.service";

@Injectable()
export class CreatePlanService{
  constructor(
    private readonly prismaService: PrismaService,
  ){}

  public async execute(
    input: CreatePlanInputDTO,
  ): Promise<CreatePlanOutputDTO>{
    const planWithSameName = await this.prismaService.plan.findFirst({
      where: {
        name: input.name,
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (planWithSameName) throw new ConflictException('Já existe um plano com esse nome');

    const plan = await this.prismaService.plan.create({
      data: {
        name: input.name,
        annualPrice: input.annualPrice,
        monthlyPrice: input.monthlyPrice,
        totalUsers: input.totalUsers,
        hasStockRedirection: input.hasStockRediretion,
        hasPdfReports: input.hasPdfReports,
        hasCsvReports: input.hasCsvReports,
        hasExcelReports: input.hasExcelReports,
        hasPrioritySuport: input.hasPrioritySuport,
      },
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
      ...plan,
      annualPrice: Number(plan.annualPrice),
      monthlyPrice: Number(plan.monthlyPrice)
    }
  }
}
