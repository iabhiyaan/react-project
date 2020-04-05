import React, { Component } from "react";

export default class BrandList extends Component {
  render() {
    return (
      <div>
        All Data Component
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id>
              First and last name
            </span>
          </div>
          <input type="text" className="form-control" />
          <input type="text" className="form-control" />
        </div>
      </div>
    );
  }
}
