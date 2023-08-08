import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Search: React.FC = () => {
  return (
    <div className="d-flex form-inputs align-items-center justify-content-center ps-4">
      <input
        className="form-control d-none d-lg-block"
        type="text"
        placeholder="Search"
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="icon d-none d-lg-block"
      />
    </div>
  );
};

export default Search;
