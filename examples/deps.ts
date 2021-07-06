export {
  Controller,
  Dero,
  Get,
  Inject,
  Post,
  Status,
} from "https://deno.land/x/dero@1.2.1/mod.ts";
export type { Handler } from "https://deno.land/x/dero@1.2.1/mod.ts";
export { UnauthorizedError } from "https://deno.land/x/dero@1.2.1/error.ts";
window.DeroMetadata = window.DeroMetadata;
console.log("META => ", window.DeroMetadata)
export {
  ApiBearerAuth,
  ApiDocument,
  ApiOperation,
  ApiParameter,
  ApiRequestBody,
  ApiResponse,
  DocumentBuilder,
  swagger,
} from "./../mod.ts";
