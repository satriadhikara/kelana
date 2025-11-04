import { Elysia } from "elysia";
import { corsMiddleware } from "./middlewares/cors";
import { openapiMiddleware } from "./middlewares/openapi";
import { authMiddleware } from "./middlewares/auth";
import { authModule } from "./modules/auth";

const app = new Elysia({
  prefix: "/api",
})
  // Middlewares
  .use(corsMiddleware)
  .use(openapiMiddleware)
  .use(authMiddleware)

  // Modules
  .use(authModule)

  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
