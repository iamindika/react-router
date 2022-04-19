import React from 'react';
import ReactDOM from 'react-dom';
import URLParams from './components/URLParams';
import NestedRoutes from './components/NestedRoutes';
import ProtectedRoutes from './components/ProtectedRoutes';
import PreventingTransitions from './components/PreventingTransitions';

function App(props) {
  return <PreventingTransitions/>
}

ReactDOM.render(<App/>, document.getElementById("app"));