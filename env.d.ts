interface ImportMetaEnv {
  readonly PUBLIC_GOOGLE_FORMS_URL: string;
  readonly PUBLIC_GOOGLE_FORMS_PREFILLED_APP_VERSION_KEY: string;
  readonly PUBLIC_GA_MEASUREMENT_ID: string;
  readonly PUBLIC_SENTRY_DSN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}