import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import NavbarAdmin from "./../components/NavbarAdmin";

const AdminLayout = props => {
  return (
    <Fragment>
      <NavbarAdmin />
      {props.children}
    </Fragment>
  );
};

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsComponent => {
        if (localStorage.getItem("userAdmin")) {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        }

        //Chuyển về trang /admin
        return <Redirect to="/admin" />;
      }}
    />
  );
}
