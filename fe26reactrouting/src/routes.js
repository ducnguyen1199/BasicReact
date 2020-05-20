import Home from "./pages/home/Home";
import About from "./pages/home/About";
import DanhSachKhoaHoc from "./pages/home/DanhSachKhoaHoc";
import ChiTietKhoaHoc from "./pages/home/ChiTietKhoaHoc";
import DemoHOC from "./HOC/DemoHOC";
import DemoHooks from "./HOOKS/DemoHooks";
import Material from "./pages/home/Material";

import HomeAdmin from "./pages/admin/HomeAdmin";
import ThemNguoiDung from "./pages/admin/ThemNguoiDung";
import ThemKhoaHoc from "./pages/admin/ThemKhoaHoc";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    exact: false,
    component: About
  },
  {
    path: "/danh-sach-khoa-hoc",
    exact: false,
    component: DanhSachKhoaHoc
  },
  {
    path: "/chi-tiet-khoa-hoc/:id",
    exact: false,
    component: ChiTietKhoaHoc
  },
  {
    path: "/demo-hoc",
    exact: false,
    component: DemoHOC
  },
  {
    path: "/demo-hooks",
    exact: false,
    component: DemoHooks
  },
  {
    path: "/demo-material",
    exact: false,
    component: Material
  }
];

const routesAdmin = [
  {
    path: "/admin/dashboard",
    exact: false,
    component: HomeAdmin
  },
  {
    path: "/admin/them-nguoi-dung",
    exact: false,
    component: ThemNguoiDung
  },
  {
    path: "/admin/them-khoa-hoc",
    exact: false,
    component: ThemKhoaHoc
  }
];

export { routesHome, routesAdmin };
