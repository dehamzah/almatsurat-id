interface ImportMetaEnv {
  readonly PUBLIC_GOOGLE_FORMS_URL: string;
  readonly PUBLIC_GOOGLE_FORMS_PREFILLED_APP_VERSION_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}