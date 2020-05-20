import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { routesHome, routesAdmin } from "./routes";
import HomeTemplate from "./templates/HomeTemplate";
import AdminTemplate from "./templates/AdminTemplate";
import Admin from "./pages/admin/Admin";
import PageNotFound from "./pages/PageNotFound";

const showMenusHome = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  }
};

const showMenusAdmin = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <AdminTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  }
};

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {showMenusHome(routesHome)}
          {showMenusAdmin(routesAdmin)}
          <Route path="/admin" exact={true} component={Admin} />
          <Route path="" exact={false} component={PageNotFound} />

          {/* <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/danh-sach-khoa-hoc" component={DanhSachKhoaHoc} />
          <Route component={PageNotFound} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
