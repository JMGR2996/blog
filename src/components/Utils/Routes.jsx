import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
import Error404 from '../Pages/Error404'
import Blog from '../Pages/Blog'
import Home from '../Pages/Home'
import PostDetail from '../Pages/PostDetail'

const PrivateRoute = ({ component: Component, authed, rest }) => (
  <Route
    {...rest}
    render={props =>
      (authed === true
        ? <Component {...props} />
        : <Redirect
          to={{ pathname: '/blog/', state: { from: props.location } }}
          />)}
  />
)

const PublicRoute = ({ component: Component, authed, rest }) => (
  <Route
    {...rest}
    render={props =>
      (authed === false ? <Component {...props} /> : <Redirect to='/posts/' />)}
  />
)

/**
 * In this component the different routes that the application has are defined.
 */

const Routes = ({ authed }) => {
  return (
    <Fragment>
      <Switch>
        <PublicRoute path='/blog/' authed={authed} exact component={Home} />
        <PrivateRoute path='/posts/' authed={authed} exact component={Blog} />
        <Route path='/post/:id' authed={authed} exact component={PostDetail} />
        <Route component={Error404} />
      </Switch>
    </Fragment>
  )
}

Routes.propTypes = {
  authed: PropTypes.bool.isRequired
}

export default Routes
