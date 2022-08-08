import logo from './logo.svg';
import React from 'react'
import './App.css';
import UseStateHook from "./UseState/UseStateHook";
import UseEffectHook from "./UseEffect/UseEffectHook";
import UseContextHook from "./UseContext/UseContextHook";

export const UserContext = React.createContext();

function App() {
  const userName = ['Jack', 'Jones', 'Emma'];
  return (
    <div className="App">
      React Hooks
      <div>
        {/* <UseStateHook /> */}
        {/* <UseEffectHook /> */}
        <UserContext.Provider value={userName}>
          <UseContextHook />
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;
