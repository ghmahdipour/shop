import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { withRouter } from "react-router"
import Layout from './containers/layout/Layout'
import Dashboard from './containers/dashboard/Dashboard'
import VendorList from './containers/vendor/VendorList'

const App = () => {
  
  let routes = (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/vendor-list" component={VendorList} />
      <Redirect to="/" />
    </Switch>
  );

  return (
      <React.Fragment>
        <Layout>{routes}</Layout>
      </React.Fragment>
  )
}

export default withRouter(App);
