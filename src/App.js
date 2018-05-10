import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom';

import Homepage from './Homepage';
import AddNode from './components/AddNode';
import DecodeRawTransaction from './components/DecodeRawTransaction';


import './App.css';

class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
      activeMenu: ''
    }
  }

  handleClick() {
    if(this.state.activeMenu === 'active') {
      this.setState({
        activeMenu: ''
      });
    } else {
      this.setState({
        activeMenu: 'active'
      });
    }
  }

  render() {
    const AddNodePage = (props) => {
      return (
        <AddNode
          bitbox={this.state.BITBOX}
        />
      );
    };

    return (
      <div id="layout" className={`${this.state.activeMenu}`}>
        <div id="main">
          <div className="header">
            <h1>The Cash Consortium</h1>
            <h2>Open Development. Open Standards.</h2>
            <p>The Cash Consortium (C2) is an international community that develops open standards to ensure the long-term growth of Bitcoin Cash.</p>
          </div>
          <div className="content">
            <Router>
              <div>
                <a href="#menu" id="menuLink" onClick={this.handleClick.bind(this)} className={`menu-link`}>
                  <span></span>
                </a>
                <div id="menu">
                  <div className="pure-menu">
                    <a
                      className="pure-menu-heading"
                      href="https://www.bitbox.earth">

                      <img src='./logo.png' /> <br />C2
                    </a>
                    <ul className="pure-menu-list">
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/addnode">
                          AddNode
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>

                <Switch>
                  <Route path="/addnode" component={AddNodePage}/>
                  <Route exact path="/" component={Homepage}/>
                  <Redirect from='*' to='/' />
                </Switch>
              </div>
            </Router>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
