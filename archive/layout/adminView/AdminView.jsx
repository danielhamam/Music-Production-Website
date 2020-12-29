import React from "react";
import './AdminView.css';

// template components
// import SideNav from '../../components/template/admin/sideNav/SideNav';

const MainView = (props) => {
  const { children } = props;

  return (
    <main className="AdminView">
      {/* <SideNav /> */}
      <div>{children}</div>
    </main>
  );
};

export default MainView;
