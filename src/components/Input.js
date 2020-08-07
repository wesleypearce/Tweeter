import React from "react";

const Input = ({ inputFunction }) => {
  return (
    <div className="input-group">
      <input
        className="form-control"
        type="text"
        id="tweet"
        aria-describedby="tweet"
      />
      <div className="input-group-append">
        <button className="btn btn-primary">{inputFunction}</button>
      </div>
    </div>
  );
};

export default Input;
