export type GenHtmlOpts = {
  swaggerOptions?: Record<string, any>;
  customCss?: string;
  customJs?: string;
  customfavIcon?: string;
  swaggerUrl?: any;
  swaggerUrls?: any;
  explorer?: any;
  customSiteTitle?: string;
  customCssUrl?: string;
  baseUrlLibSwagger?: string;
  htmlTplString?: string;
  jsTplString?: string;
};
export type TOptionServe = GenHtmlOpts & {
  validationMetadatasToSchemas?: (...args: any) => any;
};
export type TInfo = {
  title: string;
  description?: string;
  termsOfService?: string;
  contact?: {
    name?: string;
    url?: string;
    email?: string;
  };
  license?: {
    name: string;
    url?: string;
  };
  version: string;
  [k: string]: any;
};
export type TOpenApi = {
  openapi?: string;
  swagger?: string;
  schemes?: string[];
  info: TInfo;
  servers: Record<string, any>[];
  components: Record<string, any>;
  security?: Record<string, any>[];
  tags: TTagObject[];
  externalDocs?: TExternalDocs;
  definitions?: Record<string, any>;
  paths?: Record<string, any>;
  [k: string]: any;
};

export type TExternalDocs = {
  description?: string;
  url: string;
  [k: string]: any;
};

export type TSecurity = {
  type: "apiKey" | "http" | "oauth2" | "openIdConnect";
  description?: string;
  name?: string;
  in?: string;
  scheme?: string;
  bearerFormat?: string;
  flows?: {
    implicit?: TOauthFlow;
    password?: TOauthFlow;
    clientCredentials?: TOauthFlow;
    authorizationCode?: TOauthFlow;
  };
  openIdConnectUrl?: string;
  [k: string]: any;
};

export type TOauthFlow = {
  authorizationUrl?: string;
  tokenUrl?: string;
  refreshUrl?: string;
  scopes: Record<string, any>;
  [k: string]: any;
};
export type TExampleObject = {
  summary?: string;
  description?: string;
  value?: any;
  externalValue?: string;
  [k: string]: any;
};

export type TExamplesObject = Record<string, TExampleObject | TReferenceObject>;
export type TContentObject = Record<string, TMediaTypeObject>;
export type TMediaTypeObject = {
  schema?: TSchemaObject | TReferenceObject;
  examples?: TExamplesObject;
  example?: any;
  encoding?: TEncodingObject;
  [k: string]: any;
};
export type TEncodingObject = Record<string, TEncodingPropertyObject>;
export type THeaderObject = TBaseParameterObject;
export type TEncodingPropertyObject = {
  contentType?: string;
  headers?: Record<string, THeaderObject | TReferenceObject>;
  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
  [k: string]: any;
};

export type TRequestBodyObject = {
  description?: string;
  content?: TContentObject;
  required?: boolean;
  schema?:
    | { new (...args: any): any }
    | Record<string, { new (...args: any): any }>;
  [k: string]: any;
};
export type TResponses = Record<string, TRequestBodyObject>;

export type TApiDoc = {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: TExternalDocs;
  operationId?: string;
  parameters?: (TParameterObject | TReferenceObject)[];
  requestBody?: TRequestBodyObject | TReferenceObject;
  responses?: TResponses;
  callbacks?: TCallbacksObject;
  deprecated?: boolean;
  security?: Record<string, any>[];
  servers?: Record<string, any>[];
  [k: string]: any;
};

export type TCallbacksObject = Record<
  string,
  TCallbackObject | TReferenceObject
>;
export type TCallbackObject = Record<string, TPathItemObject>;
export type THeadersObject = Record<string, THeaderObject | TReferenceObject>;

export type TPathItemObject = {
  $ref?: string;
  summary?: string;
  description?: string;
  get?: TApiDoc;
  put?: TApiDoc;
  post?: TApiDoc;
  delete?: TApiDoc;
  options?: TApiDoc;
  head?: TApiDoc;
  patch?: TApiDoc;
  trace?: TApiDoc;
  servers?: Record<string, any>[];
  parameters?: (TParameterObject | TReferenceObject)[];
  [k: string]: any;
};

export type TParameterStyle =
  | "matrix"
  | "label"
  | "form"
  | "simple"
  | "spaceDelimited"
  | "pipeDelimited"
  | "deepObject";

type TBaseParameterObject = {
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: TParameterStyle;
  explode?: boolean;
  allowReserved?: boolean;
  schema?: TSchemaObject | TReferenceObject;
  examples?: Record<string, TExampleObject | TReferenceObject>;
  example?: any;
  content?: TContentObject;
  [k: string]: any;
};
export type TTagObject = {
  name: string;
  description?: string;
  externalDocs?: TExternalDocs;
  [k: string]: any;
};

export type TParameterLocation = "query" | "header" | "path" | "cookie";

export type TParameterObject = TBaseParameterObject & {
  name: string;
  in: TParameterLocation;
  [k: string]: any;
};

export type TDiscriminatorObject = {
  propertyName: string;
  mapping?: Record<string, string>;
  [k: string]: any;
};

export type TXmlObject = {
  name?: string;
  namespace?: string;
  prefix?: string;
  attribute?: boolean;
  wrapped?: boolean;
  [k: string]: any;
};

export type TSchemaObject = {
  nullable?: boolean;
  discriminator?: TDiscriminatorObject;
  readOnly?: boolean;
  writeOnly?: boolean;
  xml?: TXmlObject;
  externalDocs?: TExternalDocs;
  example?: any;
  deprecated?: boolean;
  type?: string;
  allOf?: (TSchemaObject | TReferenceObject)[];
  oneOf?: (TSchemaObject | TReferenceObject)[];
  anyOf?: (TSchemaObject | TReferenceObject)[];
  not?: TSchemaObject | TReferenceObject;
  items?: TSchemaObject | TReferenceObject;
  properties?: Record<string, TSchemaObject | TReferenceObject>;
  additionalProperties?: TSchemaObject | TReferenceObject | boolean;
  patternProperties?: TSchemaObject | TReferenceObject | any;
  description?: string;
  format?: string;
  default?: any;
  title?: string;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  enum?: any[];
  [k: string]: any;
};

type TReferenceObject = {
  $ref: string;
  [k: string]: any;
};
