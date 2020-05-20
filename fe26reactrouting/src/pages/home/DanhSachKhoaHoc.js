import React, { Component } from "react";
import KhoaHoc from "./../../components/KhoaHoc";
import { connect } from "react-redux";
import * as action from "./../../redux/action/index";

class DanhSachKhoaHoc extends Component {
  componentDidMount() {
    this.props.getListCourse();
  }

  renderHTML = () => {
    return this.props.listCourse.map((item, index) => {
      return <KhoaHoc key={index} khoaHoc={item} />;
    });
  };

  render() {
    return (
      <div className="container">
        <h3>DanhSachKhoaHoc Component</h3>
        <div className="row">{this.renderHTML()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listCourse: state.khoaHocReducer.listCourse
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListCourse: () => {
      dispatch(action.actGetListCourseAPI());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DanhSachKhoaHoc);
