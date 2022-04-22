import React from 'react';
import ReactDOM from 'react-dom';
import URLParams from './components/URLParams';
import NestedRoutes from './components/NestedRoutes';
import ProtectedRoutes from './components/ProtectedRoutes';
import PreventingTransitions from './components/PreventingTransitions';
import RouteConfig from './components/RouteConfig';
import RecursiveRoutes from './components/RecursiveRoutes';

function App(props) {
  return <RecursiveRoutes />
}

ReactDOM.render(<App/>, document.getElementById("app"));