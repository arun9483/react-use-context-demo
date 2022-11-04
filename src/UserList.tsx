import React, { useContext, useEffect } from 'react';
import UsersContext, { IUsersContext } from './user-context';
import { Users } from './types';

import './UserList.css';

const UserList = () => {
  const { users, setUsers } = useContext<IUsersContext>(UsersContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers((preUsers: Users) => {
        const updatedUsers: Users = {};
        Object.keys(preUsers).forEach((key) => {
          updatedUsers[key] = !users[key];
        });
        return updatedUsers;
      });
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [users]);
  return (
    <ul className="users-list">
      {Object.entries(users).map((entry) => {
        const [key, value] = entry;
        return (
          <li key={key} className="user-details">
            <span className="title">{key} : </span>
            <span className={value ? 'online' : 'offline'}></span>
          </li>
        );
      })}
    </ul>
  );
};

export default UserList;
