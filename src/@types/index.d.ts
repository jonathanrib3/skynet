declare global {
  interface UserToken {
    id: number;
    type: "student" | "pilot" | "instructor";
  }

  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
    }
  }
}

export {};
