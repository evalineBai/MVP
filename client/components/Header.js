import React from 'react';
import {Icon} from 'react-fa';

const head = {
  'color': '#20232A'
}

const subHead = {
  'color': '#a5b1c2'
}

const Header = () => (
  <div>
    <h1 style={head}><Icon name='btc' size='lg'/>TC Blockchain Explorer</h1>
    <h4 style={subHead}>Explore Activity Behind Public Keys</h4>
  </div>
)

export default Header;