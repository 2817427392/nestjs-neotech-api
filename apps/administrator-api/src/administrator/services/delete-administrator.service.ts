import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "shared/database/services/prisma.service";
import { DeleteAdministratorInputDTO } from "../dto/io/delete-administrator-input.dto";
import { FindAdministratorByIdService } from "./find-administrator-by-id.service";
import { AdministratorOutputDTO } from "../dto/io/administrator-output.dto";
import { AuthenticatedUser } from "apps/auth-api/src/auth/interfaces/authenticated-user.interface";

@Injectable()
export class DeleteAdministratorService{
  constructor(
    private readonly prismaService: PrismaService,
    private readonly findAdministratorByIdService: FindAdministratorByIdService,
  ){}

  public async execute(
    { id }: DeleteAdministratorInputDTO,
    user: AuthenticatedUser,
  ): Promise<AdministratorOutputDTO>{
    const administrator = await this.findAdministratorByIdService.execute({ id });

    if (!administrator) throw new NotFoundException('Administrador não foi encontrado');

    if (administrator.id = user.id) throw new ConflictException('Não é possível se excluir');

    await this.prismaService.administrator.delete({
      where: {
        id,
      }
    })

    return administrator;
  }
}
