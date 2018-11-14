import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Login from '@/pages/login'
import Admin from '@/pages/admin'
import Home from '@/pages/home'
import Button from '@/pages/ui/buttons'
import Modal from '@/pages/ui/modals'
import Loading from '@/pages/ui/loading'
import Notifications from '@/pages/ui/notifications'
import Messages from '@/pages/ui/messages'
import Tabs from '@/pages/ui/tabs'
import Gallery from '@/pages/ui/gallery'
import Carousel from '@/pages/ui/carousel'

export default class ERouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route
            path="/"
            component={() => (
              <Admin>
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/ui/buttons" component={Button} />
                  <Route path="/ui/modals" component={Modal} />
                  <Route path="/ui/loadings" component={Loading} />
                  <Route path="/ui/notifications" component={Notifications} />
                  <Route path="/ui/messages" component={Messages} />
                  <Route path="/ui/tabs" component={Tabs} />
                  <Route path="/ui/gallery" component={Gallery} />
                  <Route path="/ui/carousel" component={Carousel} />
                  <Redirect to="/home" />
                </Switch>
              </Admin>
            )}
          />
        </Switch>
      </Router>
    )
  }
}
