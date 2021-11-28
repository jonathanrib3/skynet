import { USERTYPE } from ".prisma/client";

export {};

declare global {
  export interface ITermSerachQuery {
    skip?: number;
    take?: number;
    term?: string;
  }

  export interface IUserTokenData {
    id: number;
    type: USERTYPE;
    name: string;
  }

  export type QueryPagination = {
    skip?: number;

    take?: number;
  };

  export interface SearchQuery<T> extends QueryPagination {
    search: Partial<T>;
  }

  export interface Model {
    id: number;

    createdAt: Date;

    updatedAt: Date;
  }
}
