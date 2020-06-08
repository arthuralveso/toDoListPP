import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import CreateTask from './pages/CreateTask';
import ListTask from './pages/ListTask';
import Login from './pages/Login';
import Register from './pages/Register';
// import { Container } from './styles';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/tasks" exact component={ListTask} />
        <Route path="/create" component={CreateTask} />
        <Route path="/tasks/:id" component={CreateTask} />
      </Switch>
    </BrowserRouter>
  );
}
