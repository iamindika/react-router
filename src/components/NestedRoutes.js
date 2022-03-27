import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const topics = [
  {
    name: "React Router",
    id: "react-router",
    description: "Declarative, component based routing for React",
    resources: [
      {
        name: "URL Parameters",
        id: "url-parameters",
        description:
          "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
        url:
          "https://ui.dev/react-router-v4/react-router-v4-url-parameters",
      },
      {
        name: "Programmatically navigate",
        id: "programmatically-navigate",
        description:
          "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
        url:
          "https://ui.dev/react-router-v4-programmatically-navigate/",
      },
    ],
  },
  {
    name: "React.js",
    id: "reactjs",
    description:
      "A JavaScript library for building user interfaces",
    resources: [
      {
        name: "React Lifecycle Events",
        id: "react-lifecycle",
        description:
          "React Lifecycle events allow you to tie into specific phases of a component's life cycle",
        url:
          "https://ui.dev/an-introduction-to-life-cycle-events-in-react-js/",
      },
      {
        name: "React AHA Moments",
        id: "react-aha",
        description:
          "A collection of 'Aha' moments while learning React.",
        url: "https://ui.dev/react-aha-moments/",
      },
    ],
  },
  {
    name: "Functional Programming",
    id: "functional-programming",
    description:
      "In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.",
    resources: [
      {
        name: "Imperative vs Declarative programming",
        id: "imperative-declarative",
        description:
          "A guide to understanding the difference between Imperative and Declarative programming.",
        url:
          "https://ui.dev/imperative-vs-declarative-programming/",
      },
      {
        name:
          "Building User Interfaces with Pure Functions and Function Composition",
        id: "fn-composition",
        description:
          "A guide to building UI with pure functions and function composition in React",
        url:
          "https://ui.dev/building-user-interfaces-with-pure-functions-and-function-composition-in-react-js/",
      },
    ],
  },
];

const Home = () => <h1>Home</h1>;

const Topics = ({match}) => (
  <div>
    <ul>
      {topics.map(({name, id}) => (
        <li key={id}>
          <Link to={`${match.url}/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
    
    <hr/>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
  </div>
);

const Topic = ({match}) => {
  const {name, description, resources} = topics.find(({id}) => id === match.params.topicId);

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>

      <ul>
        {resources.map(({name, id}) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>

      <hr/>

      <Route path={`${match.path}/:resourceId`} component={Resource}/>
    </div>
  )
}

const Resource = ({match}) => {
  const {resources} = topics.find(({id}) => id === match.params.topicId);
  const {name, description, url} = resources.find(({id}) => id === match.params.resourceId);

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={url} alt={name}>More info.</a>
    </div>
  )
} 

export default function NestedRoutes(props) {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/topics" component={Topics}/>
      </div>
    </Router>
  )
}