import { ConflictException, Injectable } from "@nestjs/common";
import { PrismaService } from "shared/database/services/prisma.service";
import { DeletePlanInputDTO } from "../dto/io/delete-plan-input.dto";
import { DeletePlanOutputDTO } from "../dto/io/delete-plan-output.dto";

@Injectable()
export class DeletePlanService{
  constructor(
    private readonly prismaService: PrismaService
  ){}

  public async execute(
    { id } : DeletePlanInputDTO 
  ): Promise<DeletePlanOutputDTO>{
    const plan = await this.prismaService.plan.findFirst({
      where: {
        id
      },
      select: {
        name: true,
        totalUsers: true,
        annualPrice: true,
        monthlyPrice: true,
      }
    });

    if (!plan) throw new ConflictException('Plano com esse id não existe');

    await this.prismaService.signature.updateMany({
      where: {
        planId: id
      },
      data: {
        planId: '',
      }
    })

    await this.prismaService.plan.delete({
      where: {
        id,
      }
    })

    return {
      ...plan,
      annualPrice: Number(plan.annualPrice),
      monthlyPrice: Number(plan.monthlyPrice),
    }
  }
}
