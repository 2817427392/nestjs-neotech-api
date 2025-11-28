import { PrismaService } from "shared/database/services/prisma.service";
import { CreateAdministratorInput } from "../dto/io/create-administrator-input.dto";
import { ConflictException, Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { AdministratorOutputDTO } from "../dto/io/administrator-output.dto";

@Injectable()
export class CreateAdministratorService{
  constructor(
    private readonly prismaService: PrismaService,
  ){}

  public async execute(
    input: CreateAdministratorInput
  ): Promise<AdministratorOutputDTO>{
    const administratorWithSameEmail = await this.prismaService.administrator.findFirst({
      where: {
        email: input.email,
      },
      select: {
        id: true,
        name: true,
      },
    });

    if (administratorWithSameEmail) throw new ConflictException('Email já está em uso');

    if (input.cpf !== undefined){
      const administratorWithSameCpf = await this.prismaService.administrator.findFirst({
        where: {
          cpf: input.cpf,
        },
        select: {
          id: true,
          name: true,
        },
      });

      if (administratorWithSameCpf) throw new ConflictException('Cpf já está cadastrado');
    }

    const name = input.name;
    const cpf = input.cpf;
    const email = input.email;
    const password = bcrypt.hashSync(input.password, 8);

    const data = cpf != undefined ? {
      name,
      cpf,
      email,
      password,
    } : {
      name,
      email,
      password,
    }

    return await this.prismaService.administrator.create({
      data,
      select: {
        id: true,
        cpf: true,
        name: true,
        email: true, 
      }
    })
  }
}
