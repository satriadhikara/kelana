import { openapi } from "@elysiajs/openapi";
import type { OpenAPIV3 } from "openapi-types";

import { authOpenAPI } from "@/utils/auth";

const paths = await authOpenAPI.getPaths();
const components = await authOpenAPI.components;

const documentation: Partial<OpenAPIV3.Document> = {
  info: {
    title: "Kelana API",
    version: "1.0.0",
  },
  paths: (paths ?? {}) as OpenAPIV3.PathsObject,
  ...(components
    ? { components: components as OpenAPIV3.ComponentsObject }
    : {}),
};

export const openapiMiddleware = openapi({
  documentation,
});
