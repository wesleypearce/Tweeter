import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-5">
      <a className="navbar-brand" href="#">
        Tweeter
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="form-inline my-2 my-lg-0 ml-auto">
          <input
            className="form-control mr-sm-2"
            type="email"
            placeholder="Twitter login"
            aria-label="Twitter login"
          />
          <input
            className="form-control mr-sm-2"
            type="password"
            placeholder="Password"
            aria-label="Password"
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
