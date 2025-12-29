import * as Sentry from "@sentry/astro";
import { version } from "./package.json";

Sentry.init({
  dsn: process.env.PUBLIC_SENTRY_DSN,
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#sendDefaultPii
    sendDefaultPii: true,
    release: version,
}); 