import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginUserInputDTO } from "../dto/io/login-user-input.dto";

@Injectable()
export class LoginUserService{
  constructor(
    private readonly jwtService: JwtService,
  ){}
  
  public async execute(
    input: LoginUserInputDTO, 
  ){
    const payload = { id: input.id, name: input.name, email: input.email, role: input.role};

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
