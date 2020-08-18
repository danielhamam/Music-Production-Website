import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import RouteWithLayout from "./components/routeWithLayout/RouteWithLayout";
// layout
import MainView from "./layout/main/MainView";
import MinimalView from "./layout/minimal/MinimalView";
import AdminView from "./layout/adminView/AdminView";
// screens
import HomeScreen from "./components/home_screen/HomeScreen";
import Login from "./admin/views/Login";
import Dashboard from './admin/views/dashboard';

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
};


class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
  };

  render() {
    return (
      <Router>
        <Switch>
          {/* Client routes */}
          <RouteWithLayout
            exact
            path="/"
            component={HomeScreen}
            layout={MinimalView}
            access="public"
          />
           <RouteWithLayout
            exact
            path="/admin"
            component={Login}
            layout={MinimalView}
            access="public"
          />
           <RouteWithLayout
            exact
            path="/admin/dashboard"
            component={Dashboard}
            layout={MinimalView}
            access="public"
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
