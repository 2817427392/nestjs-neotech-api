import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "shared/database/services/prisma.service";
import { AdministratorOutputDTO } from "../dto/io/administrator-output.dto";
import { FindAdministratorByCpfInputDTO } from "../dto/io/find-administrator-by-cpf-input";

@Injectable()
export class FindAdministratorByCpfService{
  constructor(
    private readonly prismaService: PrismaService,
  ){}

  public async execute(
    { cpf } : FindAdministratorByCpfInputDTO,
  ): Promise<AdministratorOutputDTO>{
    const administrator = await this.prismaService.administrator.findUnique({
      where: {
        cpf,
      },
      select: {
        id: true,
        cpf: true,
        name: true,
        email: true,
      }
    });

    if (!administrator) throw new NotFoundException('Administrador com esse cpf não existe');

    return administrator;
  }
}
