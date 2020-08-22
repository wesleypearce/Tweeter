import React from "react";

const Input = ({ setInput, postInput }) => {
  const handleClick = () => {
    postInput();
  };

  const handleKeyPress = e => {
    // e.preventDefault();
    const key = e.keyCode || e.which;
    if (key == 13) postInput();
  };

  return (
    <div className="input-group">
      <input
        className="form-control"
        type="text"
        id="tweet"
        aria-describedby="tweet"
        onKeyPress={e => handleKeyPress(e)}
        onChange={e => setInput(e.target.value)}
      />
      <div className="input-group-append">
        <button onClick={handleClick} className="btn btn-primary">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default Input;
