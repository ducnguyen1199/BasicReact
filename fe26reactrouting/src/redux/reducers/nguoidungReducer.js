import * as ActionType from "./../constants/actionType";

let initialState = {
  danhSachGV: []
};

const nguoiDungReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LAY_DANH_SACH_GV:
      state.danhSachGV = action.danhSachGV;
      return { ...state };

    default:
      return { ...state };
  }
};

export default nguoiDungReducer;
