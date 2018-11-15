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
import FormLogin from '@/pages/form/login'
import FormRegister from '@/pages/form/register'
import BasicTable from '@/pages/table/basic'
import RichEdit from '@/pages/editor'
import City from '@/pages/city'
import Order from '@/pages/order'
import User from '@/pages/user'
import BikeMap from '@/pages/map'
import BarChart from '@/pages/chart/bar'
import PieChart from '@/pages/chart/pie'
import LineChart from '@/pages/chart/line'
import Permission from '@/pages/permission'

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
                  <Route path="/form/login" component={FormLogin} />
                  <Route path="/form/register" component={FormRegister} />
                  <Route path="/table/basic" component={BasicTable} />
                  <Route path='/editor' component={RichEdit} />
                  <Route path='/city' component={City} />
                  <Route path='/order' component={Order} />
                  <Route path='/user' component={User} />
                  <Route path='/bikeMap' component={BikeMap} />
                  <Route path='/charts/line' component={LineChart} />
                  <Route path='/charts/pie' component={PieChart} />
                  <Route path='/charts/bar' component={BarChart} />
                  <Route path='/permission' component={Permission} />
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
