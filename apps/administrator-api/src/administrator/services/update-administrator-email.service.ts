import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "shared/database/services/prisma.service";
import { FindAdministratorByEmailService } from "./find-administrator-by-email.service";
import { AdministratorOutputDTO } from "../dto/io/administrator-output.dto";
import { UpdateAdministratorEmailInputDTO } from "../dto/io/update-administrator-email-input.dto";
import { FindAdministratorByIdService } from "./find-administrator-by-id.service";

@Injectable()
export class UpdateAdministratorEmailService{
  constructor(
    private readonly prismaService: PrismaService,
    private readonly findAdministratorById: FindAdministratorByIdService,
  ){}

  public async execute(
    { email, user: { id, email: userEmail } }: UpdateAdministratorEmailInputDTO,
  ): Promise<AdministratorOutputDTO>{
    await this.findAdministratorById.execute({ id });

    if (email === userEmail) throw new ConflictException('Não é possível alterar um e-mail para o mesmo');

    const administratorWithSameEmail = await this.prismaService.administrator.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
        name: true,
      }
    })

    if (administratorWithSameEmail) throw new ConflictException('Email já cadastrado');

    const administradorUpdated = await this.prismaService.administrator.update({
      where: {
        id,
      },
      data: {
        email,
      },
      select: {
        id: true,
        cpf: true,
        name: true,
        email: true,
        password: true,
      },     
    });

    return administradorUpdated;
  }
}
