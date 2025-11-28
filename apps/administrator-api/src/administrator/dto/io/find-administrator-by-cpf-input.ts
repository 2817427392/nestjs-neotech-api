import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, Length } from "class-validator";

export class FindAdministratorByCpfInputDTO{
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim().replace(/[^\d]/g, ''))
  @Length(11, 11, { message: "CPF deve ter 11 números" })
  public cpf: string;
}
