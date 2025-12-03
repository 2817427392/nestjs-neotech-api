import { PrismaService } from "shared/database/services/prisma.service";
import { FindManyAdministratorsInputDTO } from "../dto/io/find-many-administrators-input.dto";
import { AdministratorOutputDTO } from "../dto/io/administrator-output.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindManyAdministratorsService{
  constructor(
    private readonly prismaService: PrismaService,
  ){}

  public async execute(
    {
      skip,
      take,
      name,
      cpf,
      email,
    }: FindManyAdministratorsInputDTO,
  ): Promise<AdministratorOutputDTO []>{
    const nameWhere = name ? { name: { contains: name }} : {};

    const cpfWhere = cpf ? { cpf: { contains: cpf }} : {};

    const emailWhere = email ? { email: { contains: email}} : {};

    return await this.prismaService.administrator.findMany({
      where: {
        ...nameWhere,
        ...cpfWhere,
        ...emailWhere,
      },
      skip,
      take,
      select: {
        id: true,
        cpf: true,
        name: true,
        email: true,
      }
    })
  }
}
