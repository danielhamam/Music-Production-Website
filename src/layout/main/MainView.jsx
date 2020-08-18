import React from "react";
import "./MainView.css";

// template components
// import Header from "../../components/template/client/header/Header";
// import Footer from "../../components/template/client/footer/Footer";

const MainView = (props) => {
  const { children } = props;

  return (
    <main className="MainView">
      {/* <Header /> */}
      <div>{children}</div>
  
    </main>
  );
};

export default MainView;
