import { HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import React, { Component } from 'react'
import Login from '@/pages/login'
import Admin from '@/pages/admin'
import Home from '@/pages/home'
import Button from '@/pages/ui/buttons'

export default class ERouter extends Component{
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={ Login }></Route>
          <Route path="/" component={ () =>
            <Admin>
              <Switch>
                <Route path="/home" component={ Home }></Route>
                <Route path="/ui/buttons" component={ Button }></Route>
                <Redirect to="/home" />
              </Switch>
            </Admin>
          }></Route>
        </Switch>
      </Router>
    )
  }
}