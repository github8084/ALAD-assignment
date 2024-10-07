declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    DB_NAME: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_HOST: string;
    DB_PORT: string;
    SECRET_KEY: string;
  }
}
