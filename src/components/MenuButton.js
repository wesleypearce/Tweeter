import React from "react";

const MenuButton = ({ name, icon }) => {
  return (
    <button className="btn btn-primary btn-block text-left">
      {icon} {name}
    </button>
  );
};

export default MenuButton;
