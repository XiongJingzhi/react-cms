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
import HighTable from '@/pages/table/high'
import RichEdit from '@/pages/editor'
import City from '@/pages/city'
import Order from '@/pages/order'
import Common from '@/pages/common'
import OrderDetail from '@/pages/order/detail'
import User from '@/pages/user'
import BikeMap from '@/pages/map'
import BarChart from '@/pages/chart/bar'
import PieChart from '@/pages/chart/pie'
import LineChart from '@/pages/chart/line'
import Permission from '@/pages/permission'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes = [
  { path: '/home', component: Home },
  { path: '/ui/buttons', component: Button },
  { path: '/ui/modals', component: Modal },
  { path: '/ui/notifications', component: Notifications },
  { path: '/ui/loadings', component: Loading },
  { path: '/ui/messages', component: Messages },
  { path: '/ui/gallery', component: Gallery },
  { path: '/ui/tabs', component: Tabs },
  { path: '/ui/carousel', component: Carousel },
  { path: '/form/login', component: FormLogin },
  { path: '/form/register', component: FormRegister },
  { path: '/table/basic', component: BasicTable },
  { path: '/table/high', component: HighTable },
  { path: '/editor', component: RichEdit },
  { path: '/city', component: City },
  { path: '/order', component: Order },
  { path: '/user', component: User },
  { path: '/bikeMap', component: BikeMap },
  { path: '/charts/line', component: LineChart },
  { path: '/charts/pie', component: PieChart },
  { path: '/charts/bar', component: BarChart },
  { path: '/permission', component: Permission }
]
class FancyRoute extends React.Component {
  componentWillMount() {
    NProgress.start()
  }
  componentDidMount() {
    NProgress.done()
  }
  render() {
    return <Route {...this.props} />
  }
}

export default class ERouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/common" render={() =>
            <Common>
                <Route path="/common/order/detail/:orderId" component={OrderDetail} />
            </Common>
          }/>
          <Route
            path="/"
            component={() => (
              <Admin>
                <Switch>
                  {
                    routes.map((route, i) => (
                      <FancyRoute key={i} {...route} />
                    ))
                  }
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
