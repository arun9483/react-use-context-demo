import React, { useState } from 'react';
import { Users } from './types';
import UsersContext from './user-context';
import UserList from './UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState<Users>({
    Bob: true,
    Gary: false,
    Jessica: true,
    Sam: false,
    Eric: true,
  });

  return (
    <div className="App">
      <header>
        <h1>React Coding Interview Challenge 5</h1>
        <p>Use the context hook to display online users</p>
      </header>
      <UsersContext.Provider value={{ users: users, setUsers: setUsers }}>
        <UserList />
      </UsersContext.Provider>
    </div>
  );
}

export default App;
