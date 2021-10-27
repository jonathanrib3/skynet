import { verify, sign } from "jsonwebtoken";

import ITokenData from "./dtos/ITokenData";

export default class JwtProvider {
  public sign<TokenPayload>(data: ITokenData<TokenPayload>): string {
    return sign(data, process.env.JWT_SECRET, { expiresIn: "8h" });
  }

  public authorize<TokenPayload>(
    token: string
  ): ITokenData<TokenPayload> | undefined {
    try {
      const decoded = verify(
        token,
        process.env.JWT_SECRET
      ) as ITokenData<TokenPayload>;
      return decoded;
    } catch (error) {}
  }
}
