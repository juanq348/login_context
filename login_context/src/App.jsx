import React from 'react';
import { useSession } from './hooks/useSession';
import Login from './components/Login';
import Session from './components/Session';

function App(){
  const { isAuthenticated } = useSession();

  return(
    <div>
      {isAuthenticated ? <Session /> : <Login />}  
    </div>
  );
}

export default App;