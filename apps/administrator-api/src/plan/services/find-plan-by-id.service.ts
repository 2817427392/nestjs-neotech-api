import { ConflictException, Injectable } from "@nestjs/common";
import { PrismaService } from "shared/database/services/prisma.service";
import { FindPlanByIdInputDTO } from "../dto/io/find-plan-by-id-input.dto";
import { FindPlanByIdOutputDTO } from "../dto/io/find-plan-by-id-output.dto";

@Injectable()
export class FindPlanByIdService{
  constructor(
    private readonly prismaService: PrismaService,
  ){}

  public async execute(
    { id }: FindPlanByIdInputDTO,
  ): Promise<FindPlanByIdOutputDTO>{
    const plan = await this.prismaService.plan.findUnique({
      where:{
        id,
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

    if (!plan) throw new ConflictException('Plano não existe');

    return {
      ...plan,
      annualPrice: Number(plan.annualPrice),
      monthlyPrice: Number(plan.monthlyPrice)
    };
  }
}
