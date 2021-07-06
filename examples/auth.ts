import { Handler, UnauthorizedError } from "./deps.ts";

export const auth: Handler = (req, res, next) => {
  const header = req.headers.get("authorization");
  if (header && header === "Bearer 1234") {
    return next();
  }
  throw new UnauthorizedError("Unauthorized. please add token 1234");
};
