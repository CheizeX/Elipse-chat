import { User } from '../users/user';

export type Channel = {
  _id: string;
  name: string;
  type: string;
  status: string;
  assignedUsers: User[];
  createdAt: Date;
  updatedAt: Date;
};
