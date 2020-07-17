import React, { Component } from 'react';
import HomeScreen from './components/home_screen/HomeScreen';

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
};

class App extends Component {

  state = {
    currentScreen: AppScreen.HOME_SCREEN,
  }

  render() {
    switch(this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen/>;
      default:
        return <div> ERROR </div>;
    } // end of switch statement
  } 
}

export default App;