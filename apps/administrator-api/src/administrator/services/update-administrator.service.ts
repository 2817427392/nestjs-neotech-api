import { ConflictException, Injectable } from "@nestjs/common";
import { PrismaService } from "shared/database/services/prisma.service";
import { UpdateAdministratorInputDTO } from "../dto/io/update-administrator-input.dto";
import { FindAdministratorByIdService } from "./find-administrator-by-id.service";
import { AdministratorOutputDTO } from "../dto/io/administrator-output.dto";

@Injectable()
export class UpdateAdministratorService{
  constructor(
    private readonly prismaService: PrismaService,
    private readonly findAdministratorByIdService: FindAdministratorByIdService, 
  ){}

  public async execute(
    input: UpdateAdministratorInputDTO,
  ): Promise<AdministratorOutputDTO>{
    const administratorWithSameCpf = await this.prismaService.administrator.findFirst({
      where: {
        cpf: input.cpf,
      },
      select: {
        id: true,
        name: true,
      }
    });

    if (administratorWithSameCpf) throw new ConflictException('Já existe um administrador com esse cpf');

    const employeeWithSameCpf = await this.prismaService.employee.findFirst({
      where: {
        cpf: input.cpf,
      },
      select: {
        id: true,
        name: true,
      }
    })

    if (employeeWithSameCpf) throw new ConflictException('Existe um funcionário com esse cpf');

    const administrator = await this.findAdministratorByIdService.execute({ id: input.id }); 

    const cpf = input.cpf !== undefined ? input.cpf : administrator.cpf;
    const name = input.name !== undefined ? input.name: administrator.name;

    return await this.prismaService.administrator.update({
      where: {
        id: input.id,
      },
      data: {
        cpf,
        name,
      },
      select: {
        id: true,
        cpf: true,
        name: true,
        email: true,
      },     
    })
  }
}
