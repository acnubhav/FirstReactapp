import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'

import Users from './User'
import Contact from './contact'
import Home from './Home'

const routing = (
  <Router>
    <div>
      <ul>
      <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user" component={Users} />
        <Route path="/contact" component={Contact} />
      
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))