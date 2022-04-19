import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt
} from 'react-router-dom';

const Home = () => <h2>Home</h2>

const Settings = () => <h2>Settings</h2>

class Survey extends Component {
  state = {
    food: '',
    isBlocking: false
  }

  handleSubmit = (e) => {
    console.log("Submitting...")
    e.preventDefault();

    e.target.reset();
    this.setState({ isBlocking: false });
  }

  handleChange = (e) => {
    const food = e.target.value 

    this.setState({
      food,
      isBlocking: food.length > 0
    })
  }

  render() {
    const { food, isBlocking } = this.state;
    // if(food && !isBlocking) {
    //   return <p>Thank you for your submission</p>
    // }

    return (
      <form onSubmit={this.handleSubmit}>
        <Prompt
          when={isBlocking}
          message={( location ) => 
            `Are you want to go to ${ location.pathname }`}
        />

        <p>isBlocking ? {isBlocking ? "Yes" : "No"}</p>

        <label>
          What is your favourite food?
          <br/>

          <input 
            type='text'
            placeholder="Favourite Food"
            onChange={this.handleChange}
            input={food}
          />
        </label>
        <button>Submit</button>
      </form>
    )
  }
}
export default function PreventingTransitions() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/survey">Survey</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>

        <hr/> 

        <Route exact path="/" component={Home} />
        <Route path="/survey" component={Survey} />
        <Route path="/settings" component={Settings} />
      </div>
    </Router>
  )
}