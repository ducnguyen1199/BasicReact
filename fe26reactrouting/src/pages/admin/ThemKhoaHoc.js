import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../redux/action/index";
import { Prompt } from "react-router-dom";

class ThemKhoaHoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maKhoaHoc: "",
      tenKhoaHoc: "",
      moTa: "",
      maDanhMucKhoaHoc: "",
      luotXem: "",
      hinhAnh: "",
      taiKhoanNguoiTao: ""
    };
  }

  componentDidMount() {
    this.props.layDanhMucKhoaHoc();
    this.props.layDanhSachGV();

    console.log(!!this.state.maKhoaHoc);
  }

  checkPrompt = () => {
    return (
      !!this.state.maKhoaHoc ||
      !!this.state.tenKhoaHoc ||
      !!this.state.moTa ||
      !!this.state.maDanhMucKhoaHoc ||
      !!this.state.luotXem ||
      !!this.state.hinhAnh ||
      !!this.state.taiKhoanNguoiTao
    );
  };

  handleOnChange = event => {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.themKhoaHoc(this.state);
  };

  renderHTMLDanhMucKhoaHoc = () => {
    return this.props.danhMucKhoaHoc.map((item, index) => {
      return (
        <option key={index} value={item.maDanhMuc}>
          {item.tenDanhMuc}
        </option>
      );
    });
  };

  renderHTMLDanhSachGV = () => {
    return this.props.danhSachGV.map((item, index) => {
      return (
        <option key={index} value={item.taiKhoan}>
          {item.hoTen}
        </option>
      );
    });
  };

  render() {
    return (
      <div>
        <Prompt
          when={this.checkPrompt()}
          message={location => `Ban co muon di den trang ${location.pathname}`}
        />

        <form className="container" onSubmit={this.handleSubmit}>
          <h3 className="display-4">Thêm khoá học</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <h3>Mã khoá học</h3>
                <input
                  className="form-control"
                  name="maKhoaHoc"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <h3>Tên khoá học</h3>
                <input
                  className="form-control"
                  name="tenKhoaHoc"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <h3>Mô tả</h3>
                <input
                  className="form-control"
                  name="moTa"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <h3>Danh mục khoá học</h3>
                <select
                  className="form-control"
                  name="maDanhMucKhoaHoc"
                  onChange={this.handleOnChange}
                >
                  <option value="select">Vui lòng chọn danh mục</option>
                  {this.renderHTMLDanhMucKhoaHoc()}
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <h3>Lượt xem</h3>
                <input
                  className="form-control"
                  name="luotXem"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <h3>Hình ảnh</h3>
                <input
                  className="form-control"
                  name="hinhAnh"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <h3>Người tạo</h3>
                <select
                  className="form-control"
                  name="taiKhoanNguoiTao"
                  onChange={this.handleOnChange}
                >
                  <option value="select">Vui lòng chọn người tạo</option>
                  {this.renderHTMLDanhSachGV()}
                </select>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success">
                  Thêm khoá học
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    danhMucKhoaHoc: state.khoaHocReducer.danhMucKhoaHoc,
    danhSachGV: state.nguoiDungReducer.danhSachGV
  };
};

const mapDispatchToProps = dispatch => {
  return {
    layDanhMucKhoaHoc: () => {
      dispatch(action.actLayDanhMucKhoaHoc());
    },
    layDanhSachGV: () => {
      dispatch(action.actLayDanhSachGV());
    },
    themKhoaHoc: khoaHoc => {
      dispatch(action.actThemKhoaHoc(khoaHoc));
    }
  };
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(ThemKhoaHoc);
