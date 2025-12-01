import { Injectable } from "@nestjs/common";
import { PrismaService } from "shared/database/services/prisma.service";
import { UpdateAdministradorPasswordInputDTO } from "../dto/io/update-administrator-password-input.dto";
import { FindAdministratorByIdService } from "./find-administrator-by-id.service";
import { AdministratorOutputDTO } from "../dto/io/administrator-output.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UpdateAdministratorPasswordService{
  constructor(
    private readonly prismaService: PrismaService,
    private readonly findAdministratorByIdService: FindAdministratorByIdService, 
  ){}

  public async execute(
    { id, password }: UpdateAdministradorPasswordInputDTO
  ): Promise<AdministratorOutputDTO>{ 
    await this.findAdministratorByIdService.execute({ id });

    return await this.prismaService.administrator.update({
      where: {
        id,
      },
      data: {
        password: bcrypt.hashSync(password, 8),
      },
      select: {
        id: true,
        cpf: true,
        name: true,
        email: true,
        password: true,
      },     
    })
  }
}
