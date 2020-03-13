import React, {useEffect, useState} from 'react';
import './App.css';
import Nav from "./navbar";
import Todo from "./Todo";
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';
import Calendar from './Calendar/Calendar'


function App() {
  return (
    <HashRouter>
    <div>
      
       <Nav/>
       <Route path='/Calendar' render={() => <Calendar />} />
      <Route path='/todo' render={() => <Todo />} />
    </div>
    </HashRouter>
  );
}

export default App;
