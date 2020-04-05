import React, { Component } from "react";

export default class AddBrand extends Component {
  render() {
    return (
      <div>
        <h3 className="text-muted">Add Brand</h3>
        <form>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Brand Name"
              aria-label="name"
              name="name"
            />
          </div>
          <div className="input-group mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Website"
              aria-label="website"
              name="website"
            />
          </div>
          <div className="input-group mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              aria-label="country"
              name="country"
            />
          </div>
          <div className="input-group mt-2">
            {/* <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Type
              </label>
            </div> */}
            <select className="custom-select" id="inputGroupSelect01">
              <option selected>Choose Type...</option>
              <option value={1}>Two Wheeler</option>
              <option value={2}>Four Wheeler</option>
              <option value={3}>Eight Wheeler</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Add Brand
          </button>
        </form>
      </div>
    );
  }
}
