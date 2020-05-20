import React, { Component } from "react";
import * as action from "./../../redux/action/index";
import { connect } from "react-redux";

class ChiTietKhoaHoc extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getDetailCourse(id);
  }

  render() {
    console.log(this.props.course);
    let { course } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img className="img-fluid" src={this.props.course.hinhAnh} alt="" />
          </div>
          <div className="col-sm-6">
            <table className="table">
              <tbody>
                <tr>
                  <td>Tên khóa học</td>
                  <td>{this.props.course.tenKhoaHoc}</td>
                </tr>
                <tr>
                  <td>Mô tả</td>
                  <td>{this.props.course.moTa}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            {course.nguoiTao ? <h1>Người tạo: {course.nguoiTao.hoTen}</h1> : ""}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    course: state.khoaHocReducer.course
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDetailCourse: id => {
      dispatch(action.actDetailCourseAPI(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChiTietKhoaHoc);
