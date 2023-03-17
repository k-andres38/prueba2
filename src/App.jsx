
import React from 'react';

import './App.css';

import Login from './componetes/Login';
import LogoutButton from './componetes/LogoutButton';
import Profile from './componetes/Profile';

function App() {
  return (
    <div className="App">
     <Login />
     <Profile />
     <LogoutButton />
    </div>


    
  );
}

export default App;
