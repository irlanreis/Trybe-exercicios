import { User } from './types/User';

export const getUserNames = (userList: User[]): string[] => userList.map(
  (user: User) => user.name);

export const getUserByRepoQuantity = (users: User[], repos: number): string[] => users.filter((user) => user.repositories >= repos).map((user) => user.name);

export const IsMonstActiveUser = (name: string, users: User[]): boolean => {
  const monstActiveUser = users.reduce(
    (prev, curr) => (prev.repositories > curr.repositories ? prev : curr),
  );

  return monstActiveUser.name === name;
}