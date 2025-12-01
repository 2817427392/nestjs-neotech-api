import { IsNotEmpty, IsString, Matches } from "class-validator";

export class UpdateAdministratorPasswordRequestDTO{
  @IsString()
  @IsNotEmpty()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/,
    { message: "A senha deve ter mínimo 8 caracteres, contendo maiúscula, minúscula, número e símbolo." }
  )
  public password: string;

}
