import { IClient } from './IClient';

export interface IInstructor extends IClient {
  courseName: string;
  graduateDate: string;
  instituteName: string;
}