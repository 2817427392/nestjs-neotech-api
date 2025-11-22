import { ConflictException, Injectable } from "@nestjs/common";
import { PrismaService } from "shared/database/services/prisma.service";
import { FindPlanByNameInputDTO } from "../dto/io/find-plan-by-name-input.dto";
import { FindPlanByNameOutputDTO } from "../dto/io/find-plan-by-name-output.dto";

@Injectable()
export class FindPlanByNameService{
  constructor(
    private readonly prismaService: PrismaService,
  ){}

  public async execute(
    { name }: FindPlanByNameInputDTO,
  ): Promise<FindPlanByNameOutputDTO>{
    const plan = await this.prismaService.plan.findFirst({
      where: {
        name,
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

    if (!plan) throw new ConflictException('Não existe um plano com esse nome...');

    return {
      ...plan,
      annualPrice: Number(plan.annualPrice),
      monthlyPrice: Number(plan.monthlyPrice),
    }
  }
}
