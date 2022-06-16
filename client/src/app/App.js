import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useAuth } from './context';

import './App.scss';

function App() {

  return (
    <div className="app">  
      <Outlet />    
    </div>
  );
}

export default App;
