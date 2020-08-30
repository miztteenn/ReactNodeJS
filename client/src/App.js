import React, { Component } from 'react';
import './App.css';
import Login from './Login/login';
import { Switch, Route} from 'react-router-dom'
import Menu from './Menu/Menu';
import Contact from './Contact/contact';
import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path="/" component={Login} />
          <Route path="/Home" component={Home} />
          <Route path="/Menu" component={Menu} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
