import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Search: React.FC = () => {
  return (
    <div className="d-flex form-inputs position-relative align-items-center ps-3">
      <input
        className="form-control ps-5"
        type="text"
        placeholder="Search..."
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="icon position-absolute"
      />
    </div>
  );
};

export default Search;
