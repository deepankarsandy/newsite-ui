/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly JELLYFIN_BASE_URL: string;
  readonly JELLYFIN_API_KEY: string;
  readonly JELLYFIN_USER_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
