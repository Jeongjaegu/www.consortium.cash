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

    return (
      <div id="" className={`${this.state.activeMenu}`}>
        <div id="main">
          <div className="header">
            <h1><img src="./12-bitcoin-cash-square-crop.svg" /> The Cash Consortium</h1>
            <h2>Open Development. Open Standards.</h2>
            <p>The Cash Consortium (C2) is an international community that develops open standards to ensure the long-term growth of Bitcoin Cash.</p>
          </div>

          <div className="pure-g content">
            <div className="pure-u-1">
              <h3><i className="far fa-lightbulb" /> C2 MISSION</h3>
              <p>The C2&rsquo;s mission is to lead Bitcoin Cash to its full potential by developing protocols and guidelines that ensure the long-term growth of the blockchain.</p>
              <h3><i className="fas fa-wrench" /> Open Standards Principles</h3>
              <p>We affirm and adhere to the <a href='https://open-stand.org/about-us/principles/'>Principles in support of The Modern Paradigm for Standards</a>&mdash;cooperation, due process, broad consensus, transparency, balance and openness.</p>
              <h3><i className="fas fa-bolt" /> Design Principles</h3>
              <h4><i className="fas fa-users" /> Bitcoin Cash for all</h4>
              <p>Money is critical to the human condition. Bitcoin Cash and Blockchain technology enable financial sovereignty in a way which is unique in history. One of C2&rsquo;s primary goals is to make these benefits available to all people, whatever their age, gender, nationality or financial status.</p>
              <h4><i className="fas fa-globe" /> Blockchain everywhere</h4>
              <p>We believe the Blockchain will prove to have as profound an impact on society as the Web. We consider it a great honor to witness the birth of such an amazing technology and view stewardship of the blockchain as a great responsibiility.</p>
              <h3><i className="fas fa-eye" /> Vision</h3>
              <h4><i className="fas fa-dollar-sign" /> Sound Money</h4>
              <p>Bitcoin Cash is the soundest money the world has ever known. It has scarcity, fungibility, divisibility, durability and transferability. It&rsquo;s our intention that it remain the soundest money the world has ever known.</p>
              <h4><i className="fas fa-code" /> Smart Money</h4>
              <p>Bitcoin Cash enables smart contracts/property, colored coins, tokens, ICOs and much more. We intend to standardize these emerging technologies in a way that plays to Bitcoin Cash&rsquo;s strengths.</p>
            </div>
            <div className="pure-u-1">
              <h3><i className="fas fa-file" /> Specifications</h3>
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <p className='branding'>
                <a href='https://spec.consortium.cash'>
                  <img src="./12-bitcoin-cash-square-crop.svg" /><br />
                  Bitcoin Cash 1.0
                </a>
              </p>
            </div>
            <div className="pure-u-1">
              <h3><i className="fas fa-building" /> Companies</h3>
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <p className='branding'>
                <a href='https://www.yours.org/@akari'>
                  <img src="./akari.jpg" /><br />
                  Akari Global Foundation
                </a>
              </p>
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <p className='branding'>
                <a href='https://twitter.com/AtlantisLabsHQ'>
                  <img src="./Atlantis.jpg" /><br />
                  AtlantisLabsHQ
                </a>
              </p>
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <p className='branding'>
                <a href='https://www.bitbox.earth'>
                  <img src="./bitbox.png" /><br />
                  BITBOX
                </a>
              </p>
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <p className='branding'>
                <a href='https://www.thebitcoincash.fund/'>
                  <img src="./bcf.jpg" /><br />
                  The Bitcoin Cash Fund
                </a>
              </p>
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <p className='branding'>
                <a href='https://www.blockpress.com/'>
                  <img src="./blockpress.jpg" /><br />
                  BlockPress
                </a>
              </p>
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <p className='branding'>
                <a href='https://www.centbee.com/'>
                  <img src="./centbee.jpg" /><br />
                  Centbee
                </a>
              </p>
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <p className='branding'>
                <a href='https://cointext.io/'>
                  <img src="./cointext.jpg" /><br />
                  CoinText
                </a>
              </p>
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <p className='branding'>
                <a href='http://flowee.org/'>
                  <img src="./Flowee.png" /><br />
                  Flowee
                </a>
              </p>
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <p className='branding'>
                <a href='https://www.minipos.cash/'>
                  <img src="./minipos.jpg" /><br />
                  MiniPOS
                </a>
              </p>
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <p className='branding'>
                <a href='https://pyxpub.io'>
                  <img src="./pyxpub.png" /><br />
                  Pyxpub
                </a>
              </p>
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <p className='branding'>
                <a href='https://www.yours.org'>
                  <img src="./yours.jpg" /><br />
                  Yours
                </a>
              </p>
            </div>
            <div className="pure-u-1">
              <h3><i className="fas fa-user" /> Individuals</h3>
              <p>The C2 is about empowering people around the world w/ Bitcoin Cash. We consist of companies and individuals committed to seeing Bitcoin Cash to it&rsquo;s full potential.</p>
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <p className='branding'>
                <a href='https://twitter.com/CryptoWyvern'>
                  <img src="./CryptoWyvern.jpg" /><br />
                  @CryptoWyvern
                </a>
              </p>
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <p className='branding'>
                <a href='https://twitter.com/howelzy'>
                  <img src="./howelzy.jpg" /><br />
                  @howelzy
                </a>
              </p>
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <p className='branding'>
                <a href='https://twitter.com/MADinMelbourne'>
                  <img src="./MADinMelbourne.png" /><br />
                  @MADinMelbourne
                </a>
              </p>
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <p className='branding'>
                <a href='https://twitter.com/mindstatex'>
                  <img src="./mindstatex.jpg" /><br />
                  Reina Nakamoto
                </a>
              </p>
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <p className='branding'>
                <a href='https://twitter.com/StackmyBCHup'>
                  <img src="./StackmyBCHup.jpg" /><br />
                  StackmyBCHup
                </a>
              </p>
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <p>
              </p>
            </div>
            <div className="pure-u-1">
              <h3><i className="far fa-smile" /> Get Involved</h3>
              <p>Do you work w/ a company in the Bitcoin Cash space? Are you an individual who is SUPERCHARGED to change the world w/ Bitcoin Cash? Please <a href='https://github.com/bigearth/www.consortium.cash'>fork this repo</a> and add yourself or reach out to <a href='https://twitter.com/cgcardona'>@cgcardona</a> for more details.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
