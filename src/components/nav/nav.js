import { useState } from "react";

const Nav = (props) => {
  return (
    <div className="nav">
      {/* <form>
        <label for="user">Hiển thị</label>
        <select id="user" onSubmit={onSubmitRecord}>
          {recordsPerPage.map((i) => {
            return (
              <div>
                <option type="submit">{0}</option>
                <option type="submit">{1}</option>
                <option type="submit">{2}</option>
                <option type="submit">{3}</option>
                <option type="submit">{4}</option>
              </div>
            );
          })}
        </select>
      </form> */}
      {/* <form onSubmit={addSearch}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        ></input>
      </form> */}
    </div>
  );
};

export default Nav;
