import React, { Component } from "react";

export default class FormNguoiDung extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <label htmlFor>Ma Nguoi Dung</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor>Ten Nguoi Dung</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor>Email</label>
          <input type="text" className="form-control" />
        </div>
      </div>
    );
  }
}
