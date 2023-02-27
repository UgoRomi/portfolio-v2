declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NEXT_PUBLIC_SITE_URL: string;
    readonly SPOTIFY_CLIENT_ID: string;
    readonly SPOTIFY_CLIENT_SECRET: string;
    readonly EDGE_CONFIG_API: string;
  }
}
