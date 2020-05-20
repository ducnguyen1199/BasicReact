import * as ActionType from "./../constants/actionType";

let initialState = {
  listCourse: [],
  course: {},
  danhMucKhoaHoc: []
};

const khoaHocReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_COURSE:
      state.listCourse = action.listCourse;
      return { ...state };

    case ActionType.DETAIL_COURSE:
      state.course = action.course;
      return { ...state };

    case ActionType.LAY_DANH_MUC_KHOA_HOC:
      state.danhMucKhoaHoc = action.danhMucKhoaHoc;
      return { ...state };

    default:
      return { ...state };
  }
};

export default khoaHocReducer;
