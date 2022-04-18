import React from 'react';
import ReactDOM from 'react-dom';
import URLParams from './components/URLParams';
import NestedRoutes from './components/NestedRoutes';
import ProtectedRoutes from './components/ProtectedRoutes';

function App(props) {
  return <ProtectedRoutes/>
}

ReactDOM.render(<App/>, document.getElementById("app"));