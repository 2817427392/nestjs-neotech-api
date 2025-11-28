import { FindAdministratorByEmailService } from "apps/administrator-api/src/administrator/services/find-administrator-by-email.service";
import { AuthenticateUserInput } from "../dto/io/authenticate-user-input.dto";
import * as bcrypt from 'bcrypt';
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthenticateUserService{
  constructor(
    private readonly findAdministratorByEmailService: FindAdministratorByEmailService,
  ){}

  public async execute(
    { email, password }: AuthenticateUserInput,
  ): Promise<any>{
    let user: any = null;
    const administrator = await this.findAdministratorByEmailService.execute({ email });

    if (administrator){
      user = { ...administrator, role: 'administrator'};
    }

    if (user && bcrypt.compareSync(password, user.password)){
      const { password, ...result } = user;
      return result;
    } else if (user){
      return 0;
    } else {
      return -1;
    }
  }
}
