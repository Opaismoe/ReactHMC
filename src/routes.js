// src/routes.js
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import {
  Home,
  SignIn,
  SignUp,
  Grocerys,
  WeeklyTasks,
  Cats
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/grocerys" component={Grocerys} />
        <Route path="/tasks" component={WeeklyTasks} />
        <Route path="/CatsArePeopleToo" component={Cats} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </div>
    )
  }
}
