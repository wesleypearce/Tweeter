import React, { useState } from "react";

const Input = ({ setInput, postInput, input }) => {
  const [text, setText] = useState("");

  const saveAndPost = () => {
    // Post tweet and then setTweet afterwards to force refresh
    postInput(text);
    setInput(text);
  };

  const handleClick = () => {
    saveAndPost();
  };

  const handleKeyPress = e => {
    // e.preventDefault();
    const key = e.keyCode || e.which;
    if (key == 13) saveAndPost();
  };

  return (
    <div className="input-group">
      <input
        className="form-control"
        type="text"
        aria-describedby="tweet"
        onKeyPress={e => handleKeyPress(e)}
        onChange={e => setText(e.target.value)}
        placeholder="What's on your mind?"
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
