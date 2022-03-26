import React from 'react';
import ReactDOM from 'react-dom';
import URLParams from './components/URLParams';

function App(props) {
  return <URLParams/>
}

ReactDOM.render(<App/>, document.getElementById("app"));