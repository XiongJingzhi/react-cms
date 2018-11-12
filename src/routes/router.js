import { HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import React, { Component } from 'react'
import Login from './pages/login'

export default class ERouter extends Component{
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={{Login}}></Route>
          </Switch>
        </App>
      </HashRouter>
    )
  }
}