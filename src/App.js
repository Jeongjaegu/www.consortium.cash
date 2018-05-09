import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom';
import logo from './logo.png';

import Homepage from './Homepage';
import AddNode from './components/AddNode';
import DecodeRawTransaction from './components/DecodeRawTransaction';


import './App.css';

class App extends Component {
  constructor(props) {

    let BITBOXCli = require('bitbox-cli/lib/bitboxcli').default;
    let BITBOX = new BITBOXCli({
      protocol: 'https',
      host: 'rest.bitbox.earth'
    });

    super(props);
    this.state = {
      activeMenu: '',
      BITBOX: BITBOX
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

    const DecodeRawTransactionPage = (props) => {
      return (
        <DecodeRawTransaction
          bitbox={this.state.BITBOX}
        />
      );
    };

    return (
      <div id="layout" className={`${this.state.activeMenu}`}>
        <div id="main">
          <div className="header">
            <h1>consortium.cash</h1>
            <h2>A web based interface to lorem ipsum dolor sit</h2>
            <p>Welcome to consortium.cash! Lorom ipsum dolor sit amit yeah yeah yeah.</p>
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

                      <img src='./logo.png' /> <br />BITBOX
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
                      <li className="pure-menu-item">
                        <NavLink
                          activeClassName="pure-menu-selected"
                          className="pure-menu-link"
                          to="/decoderawtransaction">
                          DecodeRawTransaction
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>

                <Switch>
                  <Route path="/addnode" component={AddNodePage}/>
                  <Route path="/decoderawtransaction" component={DecodeRawTransactionPage}/>
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
