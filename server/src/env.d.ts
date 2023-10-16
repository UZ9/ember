declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: string;
    readonly PORT: string;
    readonly WEBSOCKET_PORT: string;
    readonly CORS_ORIGIN: string;
  }
}
