declare global {
  interface UserToken {
    id: string;
    role: "student" | "pilot" | "instructor";
  }

  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
    }
  }
}

export {};
