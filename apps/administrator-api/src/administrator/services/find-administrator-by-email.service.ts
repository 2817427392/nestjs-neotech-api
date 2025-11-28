import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "shared/database/services/prisma.service";
import { FindAdministratorByEmailInputDTO } from "../dto/io/find-administrator-by-email-input.dto";
import { FindAdministratorByEmailOutputDTO } from "../dto/io/find-administrator-by-email-output.dto"; 

@Injectable()
export class FindAdministratorByEmailService{
  constructor(
    private readonly prismaService: PrismaService,
  ){}

  public async execute(
    { email } : FindAdministratorByEmailInputDTO,
  ): Promise<FindAdministratorByEmailOutputDTO>{
    const administrador = await this.prismaService.administrator.findFirst({
      where: {
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

    return administrador; 
  }
}
