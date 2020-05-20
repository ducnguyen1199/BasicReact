import React, { useState, useEffect } from "react";
import Axios from "axios";
import KhoaHoc from "./../../components/KhoaHoc";

export default function Home() {
  /**
   * - Khởi tạo useState
   * - Su dung Axios => then=>result
   * - useSate = result.data
   */

  const [state, setState] = useState({ danhSachKhoaHoc: [], status: true });

  useEffect(() => {
    // useEffect tuong tứng bên class lifecycle: componentWillMount, componentDidMount, componentDidUpdate
    // Thêm vào tham số thứ 2 là [] thì dc hiểu là componentDidMount
    Axios({
      method: "GET",
      url:
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
    })
      .then(result => {
        setState({ danhSachKhoaHoc: result.data });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const renderHTML = () => {
    return state.danhSachKhoaHoc.map((item, index) => {
      return <KhoaHoc key={index} khoaHoc={item} />;
    });
  };

  return (
    <div className="container">
      <div className="home">
        <h3>Danh Sach khoa Hoc</h3>
      </div>
      <div className="row">{renderHTML()}</div>
    </div>
  );
}
