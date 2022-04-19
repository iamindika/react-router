import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = () => <h1>Home</h1>

const Newsletters = ({ routes }) => (
  <div>
    <h2>Newsletters</h2>

    <ul>
      {routes.map(({ path, name }) => (
        <li key={path}>
          <Link to={path}>{name}</Link>
        </li>
      ))}
    </ul>

    {routes.map((route) => (
      <RouteWithSubRoutes 
        key={route.path}
        {...route}
      />
    ))}
  </div>
)

const Publication = ({ name }) => <h2>Publication: {name}</h2>

const routes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Home
  }, 
  {
    name: 'Newsletters',
    path: '/newsletters',
    component: Newsletters,
    routes: [
      {
        name: 'React',
        path: '/newsletters/react',
        component: Publication
      },
      {
        name: 'UI',
        path: '/newsletters/ui',
        component: Publication
      }
    ]
  }
]

const RouteWithSubRoutes = ({ component: Component, path, routes, exact, name }) => (
  <Route path={path} exact={exact} render={(props) => (
    <Component {...props} name={name} routes={routes} />
  )} />
)

export default class RouteConfig extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            {routes.map(({ path, name }) => (
              <li key={path}>
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>

          {routes.map((route) => (
            <RouteWithSubRoutes 
              key={route.path} 
              {...route}
            />
          ))}
        </div>
      </Router>
    )
  }
}