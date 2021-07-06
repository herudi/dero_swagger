import { auth } from "./auth.ts";
import CatController from "./cats/cat_controller.ts";
import { Dero, DocumentBuilder, swagger } from "./deps.ts";

export class Application extends Dero {
  constructor() {
    super();
    this.use({ 
      wares: [auth],
      class: [CatController] 
    });
    const doc = new DocumentBuilder()
      .setInfo({
        title: "This amazing cat examples",
        version: "1.0.0",
        description: "This is a sample server Cat server. You can find out more about [https://github.com/herudi/dero_swagger/tree/master/examples](https://github.com/herudi/dero_swagger/tree/master/examples). for auth, please add authorize **1234**",
      })
      .addBearerAuth()
      .addSchemes("https")
      .addServer("https://dero-swagger.deno.dev")
      .build();

    swagger(this, "/api-docs", doc);
  }
}
