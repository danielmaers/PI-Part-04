import './App.css';
import React from 'react';
import { Home } from './components/Home';
import {Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Route path="/home" component={Home}/>
    </div>
  );
}

export default App;
