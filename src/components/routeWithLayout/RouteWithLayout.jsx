import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { isLogin } from "../../utils/authManager";
const RouteWithLayout = (props) => {
  const {
    layout: Layout,
    component: Component,
    restricted,
    access,
    ...rest
  } = props;

  if (access === "public")
    return (
      <Route
        {...rest}
        render={(matchProps) => (
          <>
            {/* // isLogin() && restricted ? ( //  */}
            {/* <Redirect to="/media" /> */}
            {/* // ) : ( */}
            <Layout>
              <Component {...matchProps} />
            </Layout>
            {/* // ) */}
          </>
        )}
      />
    );
  else if (access === "private")
    return (
      <Route
        {...rest}
        render={(matchProps) => (
          <>
            {/* // isLogin() ? ( */}
            <Layout>
              <Component {...matchProps} />
            </Layout>
            {/* // ) : ( */}
            <Redirect to="/admin" />
            {/* // ) */}
          </>
        )}
      />
    );
};

export default RouteWithLayout;
