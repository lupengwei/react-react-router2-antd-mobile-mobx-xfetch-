import React, { Component } from 'react';

import LayoutBotBar from '../../components/layout/BotBar.jsx';

import './Common.less';

class Home extends Component {
  render() {
    return (
      <LayoutBotBar>
        <div>
          message页面
        </div>
      </LayoutBotBar>
    );
  }
}

export default Home;
