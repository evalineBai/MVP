import React from 'react';

const head = {
  'color': '#20232A'
}

const subHead = {
  'color': '#ACBEBE'
}

const Header = () => (
  <div class="page-header">

    <h1 style={head}>BTC Blockchain Explorer</h1>
    <h4 style={subHead}>Explore Activity Behind Public Keys</h4>

  </div>
)

export default Header;