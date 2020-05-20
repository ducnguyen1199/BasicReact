import React, { Component } from "react";
import * as action from "./../../redux/action/index";
import { connect } from "react-redux";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taiKhoan: "",
      matKhau: ""
    };
  }

  handleOnChane = event => {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.loginAdmin(this.state, this.props.history);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <form onSubmit={this.handleOnSubmit}>
              <div className="form-group">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={this.handleOnChane}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Password</label>
                <input
                  type="text"
                  className="form-control"
                  name="matKhau"
                  onChange={this.handleOnChane}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginAdmin: (user, history) => {
      dispatch(action.actLoginAdmin(user, history));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Admin);
