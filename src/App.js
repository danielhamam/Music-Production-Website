// import { BrowserRouter as Router, Switch, HashRouter } from "react-router-dom";
// import RouteWithLayout from "./components/routeWithLayout/RouteWithLayout";
// layout
// import MainView from "./layout/main/MainView";
// import MinimalView from "./layout/minimal/MinimalView";
// import AdminView from "./layout/adminView/AdminView";
// import Login from "./admin/views/Login";
// import Dashboard from './admin/views/dashboard';

import HomeScreen from "./components/home_screen/HomeScreen";
import React, { Component } from "react";

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
};

class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    loading: false
  };

  handleSubmitForm = async (e) => {
    e.preventDefault();
    this.setState({loading: true})
    // axios
    //   .post(
    //     `${API_URL}contact/create`,
    //     {
    //       name: this.state.name,
    //       email: this.state.email,
    //       subject: this.state.subject,
    //       message: this.state.message
    //     }
    //   )
    //   .then(async (response) => {
    //     Swal.fire("Message sent successfully", "", "success");
    //     this.setState({
    //       name: "",
    //       email: "",
    //       subject: "",
    //       message: "",
    //     })
    //   })
    //   .catch((err) => {
    //     Swal.fire("Something went wrong", "", "error");
    //   })
      .finally(()=>{
        this.setState({loading: false})
      })
  };

  render() {
    return (
      <HomeScreen />
    );
  }
}

export default App;
