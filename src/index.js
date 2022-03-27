import React from 'react';
import ReactDOM from 'react-dom';
import URLParams from './components/URLParams';
import NestedRoutes from './components/NestedRoutes';

function App(props) {
  return <NestedRoutes/>
}

ReactDOM.render(<App/>, document.getElementById("app"));