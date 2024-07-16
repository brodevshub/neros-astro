/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly INSTAGRAM_ACCESS_TOKEN: string;
    readonly GOOGLE_MAPS_API_KEY: string;
    readonly RESEND_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
