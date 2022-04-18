import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link, 
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';

// Fake authenticate api
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  logOut(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100)
  }
};

const Home = () => (
  <h1>Home</h1>
);

const Notifications = () => (
  <h1>Notifications</h1>
);

const AuthButton = withRouter(({ history }) => ( 
  fakeAuth.isAuthenticated === true &&
    <button onClick={() => fakeAuth.logOut(() => {
      history.push('/')
    })}>Sign out</button>
));

class Login extends Component {
  state = {
    returnToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ returnToReferrer: true})
    })
  };

  render() {
    const { returnToReferrer } = this.state;
    const { from } = this.props.location.state 
      || { from: { pathname: "/" }};
    
    return returnToReferrer 
      ? <Redirect to={from}/>
      : <div>
          <p>You must login to view {from.pathname}</p>
          <button onClick={this.login}>Log in</button>
        </div>
  };
}

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => fakeAuth.isAuthenticated
    ? <Component {...props} />
    : <Redirect to={{
        pathname: "/login",
        state: {
          from: props.location
        }
      }} />
  }/>
)

export default function ProtectedRoutes() {
  console.log("Is Authenticated: ",fakeAuth.isAuthenticated)
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
        </ul>

        <AuthButton />

        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/notifications" component={Notifications} />
      </div>
    </Router>
  )
} 