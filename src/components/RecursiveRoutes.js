import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Link
} from 'react-router-dom';

const users = [
  { id: 0, name: 'Michelle', friends: [1, 2, 3]},
  { id: 1, name: 'Sean', friends: [0, 3]},
  { id: 2, name: 'Kim', friends: [0, 1, 3]},
  { id: 3, name: 'David', friends: [1, 2]}
];

const find = (id) => users.find((user) => user.id === id);

const Person = ({ match }) => {
  const { name, friends } = find(Number(match.params.id));

  return (
    <div>
    <h2>{name}'s friends:</h2>
      <ul>
        {friends.map((id) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{find(id).name}</Link>
          </li>
        ))}
      </ul>

      <Route path={`${match.url}/:id`} component={Person} />
    </div>
  )
}
export default class RecursiveRoutes extends Component {
  render() {
    return (
      <Router>
        <Person match={{ params: { id: 0 }, url: '' }} />
      </Router>
    )
  }
}