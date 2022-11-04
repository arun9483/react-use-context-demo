import { createContext } from 'react';
import { Users } from './types';

export interface IUsersContext {
  users: Users;
  setUsers: React.Dispatch<React.SetStateAction<Users>>;
}

const UsersContext = createContext<IUsersContext>({} as IUsersContext);

export default UsersContext;
