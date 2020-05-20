import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class KhoaHoc extends Component {
  render() {
    let { khoaHoc } = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={khoaHoc.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{khoaHoc.tenKhoaHoc}</h4>
            <p className="card-text">{khoaHoc.moTa}</p>
            <NavLink
              className="btn btn-success"
              to={`/chi-tiet-khoa-hoc/${khoaHoc.maKhoaHoc}`}
            >
              Chi tiết
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
