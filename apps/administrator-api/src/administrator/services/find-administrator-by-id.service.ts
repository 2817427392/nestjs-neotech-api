import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "shared/database/services/prisma.service";
import { FindAdministratorByIdInputDTO } from "../dto/io/find-administrator-by-id-input.dto";
import { AdministratorOutputDTO } from "../dto/io/administrator-output.dto";

@Injectable()
export class FindAdministratorByIdService{
  constructor(
    private readonly prismaService: PrismaService,
  ){}

  public async execute(
    { id } : FindAdministratorByIdInputDTO,
  ): Promise<AdministratorOutputDTO>{
    const administrator = await this.prismaService.administrator.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        cpf: true,
        name: true,
        email: true,
      }
    });

    if (!administrator) throw new NotFoundException('Administrador com esse id não existe');

    return administrator;
  }
}
