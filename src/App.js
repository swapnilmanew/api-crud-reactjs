import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Add from './components/Add';
import Edit from './components/Edit';
import Data from './components/Data';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/add" component={Add} />
          <Route exact path="/edit" component={Edit} />
          <Route exact path="/data" component={Data} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
