import React, { useEffect } from "react";
import KhoaHoc from "./../../components/KhoaHoc";
import * as action from "./../../redux/action/index";
import { connect } from "react-redux";

function About(props) {
  useEffect(() => {
    props.getListCourse();
  }, []);

  const renderHTML = () => {
    return props.listCourse.map((item, index) => {
      return <KhoaHoc key={index} khoaHoc={item} />;
    });
  };

  return (
    <div className="container">
      <div className="row">{renderHTML()}</div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    listCourse: state.khoaHocReducer.listCourse
  };
};

const mapDispatchToProps = dispath => {
  return {
    getListCourse: () => {
      dispath(action.actGetListCourseAPI());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
