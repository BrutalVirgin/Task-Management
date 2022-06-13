import { Secret } from "jsonwebtoken";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: "development" | "production";
      PORT?: string;
      PWD: string;
      MONGO_URL: string;
      JWT_TOKEN: Secret;
    }
  }
}

export { DBURL };
