import { betterAuth, type BetterAuthPlugin } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { openAPI } from "better-auth/plugins";
import { expo } from "@better-auth/expo";

import { db } from "@/utils/db";
import { env } from "@/utils/env";

export const auth = betterAuth({
  plugins: [openAPI(), expo() as unknown as BetterAuthPlugin],
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
  trustedOrigins: env.CLIENT_URLS,
});

type OpenAPIPlugin = ReturnType<typeof openAPI>;
type GenerateSchemaEndpoint =
  OpenAPIPlugin["endpoints"]["generateOpenAPISchema"];
type BetterAuthOpenAPISchema = Awaited<ReturnType<GenerateSchemaEndpoint>>;

let cachedSchema: Promise<BetterAuthOpenAPISchema> | null = null;

const getSchema = () =>
  (cachedSchema ??= (
    auth.api as unknown as {
      generateOpenAPISchema: GenerateSchemaEndpoint;
    }
  ).generateOpenAPISchema());

export const authOpenAPI = {
  components: getSchema().then(({ components }) => components),
  getPaths: async (prefix = "/api/auth") => {
    const { paths } = await getSchema();
    const reference: BetterAuthOpenAPISchema["paths"] = Object.create(null);

    if (!paths) {
      return reference;
    }

    for (const path of Object.keys(paths)) {
      const key = `${prefix}${path}`;
      const existing = paths[path];
      if (!existing) continue;

      reference[key] = {
        ...existing,
      } as BetterAuthOpenAPISchema["paths"][string];

      for (const method of Object.keys(existing)) {
        const operation = (reference[key] as any)[method];
        if (operation) {
          operation.tags = ["Better Auth"];
        }
      }
    }

    return reference;
  },
};
