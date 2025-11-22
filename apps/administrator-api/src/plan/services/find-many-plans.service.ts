import { Injectable } from "@nestjs/common";
import { PrismaService } from "shared/database/services/prisma.service";
import { FindManyPlansInputDTO } from "../dto/io/find-many-plans-input.dto";
import { contains } from "class-validator";
import { FindManyPlansOutputDTO } from "../dto/io/find-many-plans-output.dto";

@Injectable()
export class FindManyPlansService{
  constructor(
    private readonly prismaService: PrismaService
  ){}

  public async execute(
    { 
      name,
      minTotalUsers,
      maxTotalUsers,
      minMonthlyPrice,
      maxMonthlyPrice,
      minAnnualPrice,
      maxAnnualPrice,
      hasPdfReports,
      hasExcelReports,
      hasCsvReports,
      hasStockRedirection,
      hasPrioritySuport,
      skip,
      take,
    } : FindManyPlansInputDTO, 
  ): Promise<FindManyPlansOutputDTO []>{
    const nameWhere = name ? { name: { contains: name } } : {};

    const totalUsersWhere = {
      ...(minTotalUsers !== undefined ? { gte: minTotalUsers } : {}),
      ...(maxTotalUsers !== undefined ? { lte: maxTotalUsers } : {}), 
    };

    const monthlyPriceWhere = {
      ...(minMonthlyPrice !== undefined ? { gte: minMonthlyPrice } : {}),
      ...(maxMonthlyPrice !== undefined ? { lte: maxMonthlyPrice } : {}),
    };

    const annualPriceWhere = {
      ...(minAnnualPrice !== undefined ? { gte: minAnnualPrice } : {}),
      ...(maxAnnualPrice !== undefined ? { lte: maxAnnualPrice } : {}),
    };

    const reportsWhere = {
      ...(hasPdfReports !== undefined ? { hasPdfReports } : {}),
      ...(hasExcelReports !== undefined ? { hasExcelReports } : {}),
      ...(hasCsvReports !== undefined ? { hasCsvReports } : {}),
      ...(hasStockRedirection !== undefined ? { hasStockRedirection } : {}),
      ...(hasPrioritySuport !== undefined ? { hasPrioritySuport } : {}),
    }

    const plans = await this.prismaService.plan.findMany({
      where: {
        ...nameWhere,
        totalUsers: totalUsersWhere,
        monthlyPrice: monthlyPriceWhere,
        annualPrice: annualPriceWhere,
        ...reportsWhere,
      },
      skip,
      take,
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
    })

    return plans.map(plan => ({
      ...plan,
      monthlyPrice: plan.monthlyPrice.toNumber(),
      annualPrice: plan.annualPrice.toNumber(),
    }));;
  }
}
