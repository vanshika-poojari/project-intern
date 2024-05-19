import { useState } from "react";

const Search = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  function handleClick(e) {
    e.preventDefault();
    setIsVisible(true);
    props.getData(isVisible);
  }

  return (
    <nav className="navbar">
      {" "}
      {/* Removed unnecessary classes */}
      <div className="container-fluid">
        <form className="d-flex" role="search">
          <input
            className="form-control"
            type="search"
            placeholder="Type your medicine name here"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success"
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Search
          </button>
        </form>
        <hr className="input-divider" />
      </div>
    </nav>
  );
};

export default Search;
