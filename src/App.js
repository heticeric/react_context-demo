import React from 'react';
import './App.css';

import LogContainer from "./components/LogContainer";
import AuthContext from "./context/AuthContext";

function App() {
  const [ isAuth, setAuth ] = React.useState( false );

  return (
    <AuthContext.Provider value={ { isAuth, setAuth } }>
      <LogContainer/>
    </AuthContext.Provider>
  );
}

export default App;
