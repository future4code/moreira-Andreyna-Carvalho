import React, {Component} from 'react'
import Components3 from './components/Components3';
import Components from './components/Components';
import Components2 from './components/Components2';

import {MainContainer} from './styled/Style'

class App extends React.Component {
  render() {
    return (
      <MainContainer>

        <Components3 />
        <Components />
        <Components2 />
        
      </MainContainer>
    );
  }
}
export default App;
