import React, { Component } from "react";
// import FormNguoiDung from "./FormNguoiDung";
import FormSanPham from "./FormSanPham";
import WithModal from "./WithModal";

let FormsModal = WithModal(FormSanPham);

export default class DemoHOC extends Component {
  render() {
    return (
      <div>
        <FormsModal />
      </div>
    );
  }
}
