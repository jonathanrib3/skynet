import { AssociateRole } from "shared";

export default interface IAssociate {
  id?: string;
  email: string;
  password: string;
  name: string;
  address: string;
  age: number;
  isApproved: boolean;
  totalFlewHours: number;
  license: string;
  courseName: string;
  graduateDate: string;
  instituteName: string;
  role: AssociateRole;
}
