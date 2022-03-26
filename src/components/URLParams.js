import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Child = ({match}) => (
  <div>
    <h2>{match.params.id}</h2>
  </div>
)

export default function URLParams(props) {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/netflix">Netflix</Link></li>
          <li><Link to="/freecodecamp">FreeCodeCamp</Link></li>
          <li><Link to="/uidev">UI.dev</Link></li>
        </ul>

        <Route path="/:id" component={Child}/>
      </div>
    </Router>
  )
}