declare global {
  interface UserToken {
    id: string;
    type: "student" | "pilot" | "instructor";
  }

  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
    }
  }
}

export {};
