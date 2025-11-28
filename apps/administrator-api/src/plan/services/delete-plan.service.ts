import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "shared/database/services/prisma.service";
import { DeletePlanInputDTO } from "../dto/io/delete-plan-input.dto";
import { DeletePlanOutputDTO } from "../dto/io/delete-plan-output.dto";
import { FindPlanByIdService } from "./find-plan-by-id.service";

@Injectable()
export class DeletePlanService{
  constructor(
    private readonly prismaService: PrismaService,
    private readonly findPlanByIdService: FindPlanByIdService,
  ){}

  public async execute(
    { id } : DeletePlanInputDTO 
  ): Promise<DeletePlanOutputDTO>{
    const count = await this.prismaService.plan.count()
    const plan = await this.findPlanByIdService.execute({ id });

    if (!plan) throw new NotFoundException('Plano com esse id não existe');

    if (count === 1) throw new ConflictException('Não é possível deletar todos os planos');

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

    return plan;
  }
}
