import { TInfo, TOpenApi, TSecurity, TTagObject } from "./types.ts";

export class DocumentBuilder {
  #doc: TOpenApi = {
    openapi: "3.0.0",
    info: {
      title: "",
      description: "",
      version: "1.0.0",
      contact: {},
    },
    tags: [],
    servers: [],
    components: {
      schemas: {},
    },
    definitions: {},
  };
  public setHost(str: string) {
    this.#doc.host = str;
    return this;
  }
  public addSchemes(str: string) {
    this.#doc.schemes = (this.#doc.schemes || []).concat([str]);
    return this;
  }
  public addTags(object: TTagObject) {
    this.#doc.tags = (this.#doc.tags || []).concat([object]);
    return this;
  }
  public useSwagger(version: string = "2.0.0") {
    this.#doc.swagger = version;
    if (this.#doc.openapi) {
      delete this.#doc.openapi;
    }
    return this;
  }
  public useOpenApi(version: string = "3.0.0") {
    this.#doc.openapi = version;
    if (this.#doc.swagger) {
      delete this.#doc.swagger;
    }
    return this;
  }
  public setInfo(info: TInfo) {
    this.#doc.info = info;
    return this;
  }
  public addServer(
    url: string,
    description?: string,
    variables?: Record<string, any>,
  ) {
    this.#doc.servers.push({ url, description, variables });
    return this;
  }
  public setExternalDoc(description: string, url: string) {
    this.#doc.externalDocs = { description, url };
    return this;
  }
  public addSecurity(name: string, opts: TSecurity) {
    this.#doc.components.securitySchemes = {
      ...(this.#doc.components.securitySchemes || {}),
      [name]: opts,
    };
    return this;
  }
  public addSecurityRequirements(
    name: string | Record<string, any>,
    requirements: string[] = [],
  ) {
    let obj: Record<string, any>;
    if (typeof name === "string") {
      obj = { [name]: requirements };
    } else {
      obj = name;
    }

    this.#doc.security = (this.#doc.security || []).concat({
      ...obj,
    });
    return this;
  }
  public addBearerAuth(
    options: TSecurity = {
      type: "http",
    },
    name = "bearerAuth",
  ) {
    this.addSecurity(name, {
      scheme: "bearer",
      bearerFormat: "JWT",
      ...options,
    });
    return this;
  }

  public addOAuth2(
    options: TSecurity = {
      type: "oauth2",
    },
    name = "oauth2",
  ) {
    this.addSecurity(name, {
      flows: {},
      ...options,
    });
    return this;
  }

  public addApiKey(
    options: TSecurity = {
      type: "apiKey",
    },
    name = "api_key",
  ) {
    this.addSecurity(name, {
      in: "header",
      name,
      ...options,
    });
    return this;
  }

  public addBasicAuth(
    options: TSecurity = {
      type: "http",
    },
    name = "basicAuth",
  ) {
    this.addSecurity(name, {
      scheme: "basic",
      ...options,
    });
    return this;
  }

  public addCookieAuth(
    cookieName = "connect.sid",
    options: TSecurity = {
      type: "apiKey",
    },
    name = "cookieAuth",
  ) {
    this.addSecurity(name, {
      in: "cookie",
      name: cookieName,
      ...options,
    });
    return this;
  }
  public build() {
    return this.#doc;
  }
}
